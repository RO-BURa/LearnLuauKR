document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('luau-container');
    const resizer = document.getElementById('luau-resizer');
    const btn = document.getElementById('luau-btn');

    // 1. 토글 함수 정의 (HTML에서 호출할 수 있게 window에 붙임 ㅋ)
    window.toggleLuau = function() {
        if (!container) return;
        const isHidden = container.style.display === 'none' || container.style.display === '';
        container.style.display = isHidden ? 'block' : 'none';
    };

    // 2. 사이즈 조절 로직 ㅋ
    if (resizer && container) {
        resizer.addEventListener('mousedown', function(e) {
            e.preventDefault();
            // 드래그 중에는 iframe이 마우스 이벤트를 뺏어가지 못하게 막음 ㅋ
            container.style.pointerEvents = 'none'; 
            
            window.addEventListener('mousemove', resize);
            window.addEventListener('mouseup', stopResize);
        });

        function resize(e) {
            const rect = container.getBoundingClientRect();
            
            // 마우스 위치에 따른 너비/높이 계산
            const newWidth = e.clientX - rect.left;
            const newHeight = rect.bottom - e.clientY;
            
            // 최소 크기 제한 ㅋ
            if (newWidth > 250) {
                container.style.width = newWidth + 'px';
            }
            if (newHeight > 200) {
                container.style.height = newHeight + 'px';
            }
        }

        function stopResize() {
            // 드래그 끝나면 다시 iframe 이벤트 살려줌 ㅋ
            container.style.pointerEvents = 'auto';
            window.removeEventListener('mousemove', resize);
            window.removeEventListener('mouseup', stopResize);
        }
    }
});