document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('luau-container');
    const resizer = document.getElementById('luau-resizer');
    const btn = document.getElementById('luau-btn');
    const closeBtn = document.getElementById('luau-close');
    const frameWrap = document.getElementById('luau-frame-wrap');

    if (!container || !frameWrap) return;

    const PLAYGROUND_URL = 'https://play.luau.org/?embed=true&theme=auto';

    // 코드를 play.luau.org 주소(#code=...)로 바꿔줌
    // play.luau.org는 {"v":2,"c":코드,"s":설정}을 lz-string으로 압축한 형식을 씀
    function makePlaygroundUrl(code) {
        const state = { v: 2, c: code, s: { optimizationLevel: 2, debugLevel: 2 } };
        if (window.LZString) {
            return PLAYGROUND_URL + '#code=' + LZString.compressToEncodedURIComponent(JSON.stringify(state));
        }
        // lz-string을 못 불러왔으면 그냥 인코딩해서 넘김
        return PLAYGROUND_URL + '#code=' + encodeURIComponent(code);
    }

    // iframe을 새로 만들어서 넣음 (주소의 #뒤만 바뀌면 새로고침이 안돼서 매번 새로 만듦)
    function loadCode(code) {
        const iframe = document.createElement('iframe');
        iframe.src = makePlaygroundUrl(code);
        iframe.title = 'Luau Playground';
        iframe.allow = 'clipboard-write';
        iframe.setAttribute('allowfullscreen', '');
        frameWrap.replaceChildren(iframe);
    }

    function isOpen() {
        return container.classList.contains('is-open');
    }

    function openLuau() {
        // 처음 열때만 빈 코드로 불러옴 (닫았다 열면 쓰던 코드 유지)
        if (!frameWrap.firstChild) loadCode('');
        container.classList.add('is-open');
        if (btn) btn.setAttribute('aria-expanded', 'true');
    }

    function closeLuau() {
        container.classList.remove('is-open');
        if (btn) btn.setAttribute('aria-expanded', 'false');
    }

    // 1. 토글 함수 정의 (HTML에서 호출할 수 있게 window에 붙임 ㅋ)
    window.toggleLuau = function() {
        if (isOpen()) closeLuau();
        else openLuau();
    };

    // 코드 넣어서 바로 열기
    window.runLuau = function(code) {
        loadCode(code);
        openLuau();
    };

    if (btn) btn.addEventListener('click', window.toggleLuau);
    if (closeBtn) closeBtn.addEventListener('click', closeLuau);

    // Esc 누르면 닫힘
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && isOpen()) closeLuau();
    });

    // 2. 사이즈 조절 로직 ㅋ (마우스, 터치 둘다 됨)
    if (resizer) {
        resizer.addEventListener('pointerdown', function(e) {
            e.preventDefault();
            resizer.setPointerCapture(e.pointerId);
            // 드래그 중에는 iframe이 마우스 이벤트를 뺏어가지 못하게 막음 ㅋ
            frameWrap.style.pointerEvents = 'none';

            resizer.addEventListener('pointermove', resize);
            resizer.addEventListener('pointerup', stopResize);
            resizer.addEventListener('pointercancel', stopResize);
        });

        function resize(e) {
            const rect = container.getBoundingClientRect();

            // 마우스 위치에 따른 너비/높이 계산 (화면 밖으로는 못나가게)
            const maxWidth = window.innerWidth - rect.left - 10;
            const maxHeight = rect.bottom - 10;
            const newWidth = Math.min(e.clientX - rect.left, maxWidth);
            const newHeight = Math.min(rect.bottom - e.clientY, maxHeight);

            // 최소 크기 제한 ㅋ
            container.style.width = Math.max(newWidth, 250) + 'px';
            container.style.height = Math.max(newHeight, 200) + 'px';
        }

        function stopResize(e) {
            // 드래그 끝나면 다시 iframe 이벤트 살려줌 ㅋ
            frameWrap.style.pointerEvents = '';
            resizer.releasePointerCapture(e.pointerId);
            resizer.removeEventListener('pointermove', resize);
            resizer.removeEventListener('pointerup', stopResize);
            resizer.removeEventListener('pointercancel', stopResize);
        }
    }

    // 3. luau 코드 블록마다 실행 버튼 달기
    const codeBlocks = document.querySelectorAll('.md-typeset .language-luau, .md-typeset .language-lua');
    codeBlocks.forEach(function(block) {
        const code = block.querySelector('code');
        if (!code) return;

        const runBtn = document.createElement('button');
        runBtn.type = 'button';
        runBtn.className = 'luau-run-btn';
        runBtn.title = '이 코드 실행해보기';
        runBtn.innerHTML = '<svg viewBox="0 0 256 256" width="12" height="12" aria-hidden="true"><path fill="currentColor" d="M240,128L72,229.65V26.35Z"></path></svg>실행';
        runBtn.addEventListener('click', function() {
            window.runLuau(code.textContent.replace(/\n$/, ''));
        });

        block.appendChild(runBtn);
    });
});
