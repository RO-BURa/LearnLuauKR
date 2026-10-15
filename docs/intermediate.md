# 중급

!!! warning "주의"
    현재 중급은 미완성임

    몇개 없는 정보땜에 정보가 왜곡되거나 이해가 어려울수있음

중급에서는 나 Luau 할줄 앎 ㅋ

자랑할수있을정도의 지식을 쌓을수 있음

---
## 튜플

튜플(tuple)은 1, 2, 3처럼 쉼표로 이어진 여러개의 값임

함수를 실행할때 dd(3, 2)처럼 인수를 여러개 넣는것도 3, 2라는 튜플을 넣는거임

```luau
1, 2, 3, 4, 5
```

!!! info "참고"
    tuple에는 길이 정보도 함께 포함됨

    예시로 nil, nil이면

    내부적으로는 길이 2 | nil, nil 이렇게 저장한다는 뜻임

### 다중 할당

다중 할당이란 동시에 여러값을 변수에 넣는거임

사용법은 변수를 쉼표를 통해서 원하는 변수로 여러개 놓고 등호를 붙이고 tuple을 넣으면 tuple 순서대로 변수에 값이 지정됨

```luau
<변수들> = <튜플>
```

이게 무슨말이냐면 밑에 예시를 통해 쉽게 이해할수있음

```luau
local a
local b

a,b = 10, 20
```

위코드랑 같음
```luau
local a
local b

a = 10
b = 20
```

변수를 설정할때가 아니더라도 선언할때도 사용 가능함

```luau
local a, b = 10, 20
local c, d
```

위 코드랑 같음

```luau
local a = 10
local b = 20
local c
local d
```

### 여러 값 반환

함수는 하나의 값만 반환하는 것이 아닌 여러개의 값(tuple)을 반환할수있음

```luau
local dd = function()
    return 1, 2, 3
end

print(dd()) -- dd()는 1, 2, 3이고 이는 튜플이다 (직접 1, 2, 3 한거랑 같은 튜플로 처리된다는뜻)
local a, b, c = dd() -- 튜플이기 때문에 다중 할당도 가능
```

!!! info "참고"
    변수 하나는 최대 하나의 값을 받을수 있음

    그렇기에
    ```luau
    local a = 1, 2, 3
    ```
    을 한다해도 a에는 1만 저장됨

!!! info "참고"
    print에 값을 여러개 넣으면 한줄에 띄어서 출력됨

!!! warning "주의"
    튜플 뒤에 값이 있으면 이어지는것이 아닌 튜플의 첫번째 요소만 남고 두번째 요소부터는 사라짐
    ```luau
    local dd = function()
        return 1, 2, 3
    end

    print(1, dd())
    print("-----")
    print(1, dd(), 100)
    ```

    ```
    출력
    1 1 2 3
    -----
    1 1 100
    ```

    다음과 같이 튜플의 첫번째 요소만 남고 뒤는 사라짐

### ...

이건 그렇게 안어려움
...은 튜플을 받을수있는 유일한 변수임
함수 매개변수 칸에 ...을 넣으면 매개변수를 튜플로 바로 받을수있음

```luau
local function dd(hi, ...)
    print(hi, ...)
end

dd()
dd(30, 10, 50)
dd("ㅎㅇ")
```

```
출력
nil
30 10 50
ㅎㅇ
```

---
## 테이블

테이블이란 이름표로 값을 저장하는 저장소 개념임

이름표로 값을 저장해서 빼올수 있음

그리고 이름표를 **index(인덱스)** 또는 **key(키)**라고 하고 값을 **value(값)**라고 함


먼저 테이블을 생성은 이렇게 할수있음
```luau
{}
```

### 인덱싱

테이블에 값을 저장하거나 구하는 행위를 **인덱싱** 이라고함

테이블에 값을 저장하는 문법임
```luau
테이블[이름표] = 값
```

예시:
```luau
local t = {} -- 테이블 생성해서 변수에 저장하기

t["이름표"] = 30 -- "이름표"에 30 저장
```

이름표로 값을 저장했으면 빼올수도 있어야함

빼오는 문법은 다음과 같음

```luau
테이블[이름표]
```

```luau
local t = {}

t["이름표"] = 30 -- 값 저장

 -- t["이름표"]는 30임
print(t["이름표"]) -- 값 빼와서 출력

```

```
출력
30
```

!!! info "참고"
    테이블을 출력하면 몇몇 엔진에선 테이블 내용을 보여줌 그래서 테이블 가지고 실험할때 더 편할거임

### 고유번호

테이블마다 고유번호가 있는데 테이블 고유번호가 같으면 같은 테이블 아니면 다른 테이블임
테이블 고유번호를 얻는 방법은 tostring({})로 구할수있음
테이블 고유번호의 구조는 문자열이고 "table: 테이블고유번호"의 형태를 띔

```luau
print(tostring({}))
```

```
출력
table: 테이블고유번호
```

테이블을 만들었을때 테이블의 내부 구조를 가상으로 그려보는것도 좋음
```luau
local a = {} -- 고유번호를 A라고 가정
a["hi"] = 30
a["good"] = 60

--[[
A
순서|인덱스|값
1|"hi"|30
2|"good"|60
]]
```

!!! info "참고"
    테이블마다 고유번호가 다 다름

    고유번호가 같으면 그건 같은 테이블임

### 순환 테이블
테이블이 순환을하면 그걸 순환테이블이라고 부름
예시는 다음과 같음
```luau
local a = {} -- A
a["hi"] = 30
a["asdf"] = a
--[[
A
순서|인덱스|값
1|"hi"|30
2|"asdf"|A
]]

print(a["asdf"] == a) -- a["asdf"]와 a가 같으면 true 아니면 false
```

```
출력
true
```

A["asdf"]가 A임

### 특수 문법

테이블을 생성할때 인덱싱 하기전 미리 값을 넣어둘수 있음

```luau
{
    [인덱스] = 값,
    ...
}
```

예시:
```luau
local a = {
    ["ㅎㅇ"] = 30,
    [true] = 10,
} -- A

--[[
A
순서|인덱스|값
1|"ㅎㅇ"|30
2|true|10
]]

print(a["ㅎㅇ"]) -- dd
```

문자열의 경우 대괄호와 따옴표 없이 가능
```luau
local a = {
    -- 변수 선언 규칙처럼 한국어나 그런건 안됨
    -- 안녕 = "bob", -- 에러
    bob = "hi",
}

print(a["bob"])
```

### 특수 인덱싱

테이블에 특수하게 인덱싱할수있는 규칙이 여러개 있음

#### .

테이블에 인덱싱할때
```luau
<테이블>.<문자열>
```
다음과 같은 방법으로 인덱싱 할수있음

이는 밑에 코드와 같음
```luau
<테이블>["<문자열>"]
```

예시:
```luau
local t = {}
t["hi"] = 30 -- t["hi"] = 30
t.good = 100 -- t["good"] = 100

print(t.hi) -- 30
print(t["good"]) -- 100
```

```
출력
30
100
```

#### asdf

테이블에 함수를 추가할때
```luau
function <테이블>.<함수이름>(<매개변수들>)
    <코드>
end
```
다음과 같은 방식으로 함수를 추가할수있음

이는 밑에 코드와 같음
```luau
<테이블>.<함수이름> = function(<매개변수들>)
    <코드>
end
```

예시:
```luau
local t = {}

t.asdf = function()
    print(1)
end

function t.good()
    print(2)
end

t.asdf()
t.good()
```

```
출력
1
2
```

### 배열
Luau에는 따로 배열이 존재하지 않고 테이블을 배열처럼 활용함.

배열가 무엇이냐면 값들을 1부터 순서대로 놓는 개체라고 생각하면됨

!!! info "참고"
    다른 언어는 0부터 배열하는데 Luau는 1부터 배열함

```luau
{"안녕", 10, 150}
```
Luau에서 저런식으로 테이블을 선언하면 다음과 같이 테이블이 생김

Luau에서 저런식으로 배열된 테이블을 배열 라고 부름

배열은 영어로 Array
```luau
{
    [1] = "안녕",
    [2] = 10,
    [3] = 150,
}
```

### 연산자

테이블에 사용할수있는 연산자

#### len

배열의 길이를 구할수있는 연산자임

```luau
local a = { "ㅎㅇ", 100, 30, true, ["엉 이건 문자열이야"] = 100, }
print(#a)
```

```
출력
4
```

!!! warning 주의사항
    배열의 중간값이 비어있는경우 (nil) len 연산자가 원하는대로 동작하지 않을수있음
    ```luau
    print(#{ [1] = true, [3] = true, })
    print(#{ [1] = true, [2] = true, [4] = true })
    ```

    ```
    출력
    1
    4
    ```

### 라이브러리
Luau에는 기본적으로 환경에 저장되어있는 라이브러리가 있음

라이브러리란 Luau에서 사용할수있는 함수 또는 값들이 정리되어있는 테이블임

[라이브러리들](https://create.roblox.com/docs/ko-kr/reference/engine/libraries)

#### string
string 라이브러리는 어디서나 사용할수 있는 라이브러리이며 문자열과 관련된 편의기능들이 있는 라이브러리임

내부적으로 C++로 이루어져있음

string 라이브러리는 일부만 여기서 다룰거고 전부 알고싶으면 해당 링크를 방문

[string 라이브러리](https://create.roblox.com/docs/ko-kr/reference/engine/libraries/string)

비슷한 라이브러리로는 utf8 라이브러리가 있음

[utf8 라이브러리](https://create.roblox.com/docs/ko-kr/reference/engine/libraries/utf8)

##### len
문자열의 바이트 길이를 반환함
```luau
string.len("asdf") -- 4 (길이가 4임)
```

바이트 길이를 반환하기 때문에 한글에 경우엔 3바이트를 차지함
```luau
string.len("한글") -- 6 (한글 글자당 3바이트)
```

##### lower

대문자를 소문자로 바꾼 문자열을 반환해줌

```luau
string.lower("ASDF") -- "asdf"
string.lower("ㄲ") -- "ㄲ" (당연하지만 영어만 지원)
```

##### upper

소문자를 대문자로 바꾼 문자열을 반환해줌

```luau
string.lower("asdF") -- "ASDF"
string.lower("ㄱ") -- "ㄱ" (당연하지만 영어만 지원)
```

##### split

문자를 기준으로 나눈 배열를 반환함

```luau
-- string.split(문자열, 기준)
local d = string.split("asdf, bob, good", ", ") -- { "asdf", "bob", "good" }
local dd = string.split("hello", "") -- { "h", "e", "l", "l", "o" }
```

#### table
테이블에 사용할수있는 편의기능들이 있으며

배열 활용할때 사용할수있는 기능들도 있음

table 라이브러리는 일부만 여기서 다룰거고 전부 알고싶으면 해당 링크를 방문

[table 라이브러리](https://create.roblox.com/docs/ko-kr/reference/engine/libraries/table)

##### clear
테이블의 모든 키의 값을 nil로 설정함

```luau
local asdf = { 10,"dasdf",300,2,80, ["ㅇ"] = 30 }

print(asdf[3]) -- 300
print(asdf["ㅇ"]) -- 30

table.clear(asdf)

print(asdf[3]) -- nil
print(asdf["ㅇ"]) -- nil
```

##### clone

같은 키와 값을가진 다른 테이블을 생성함 (복사)

```luau
local a = {
    bob = {},
    nice = 100,
}
local b = table.clone(a)

print(a == b) -- false
print(a.bob == b.bob) -- true
print(a.nice == b.nice) -- true
```

```
출력
false
true
true
```

##### create
값으로 꽉채운 배열를 반환함

```luau
table.create(10, "ㅎㅇ") -- { "ㅎㅇ", "ㅎㅇ", ... "ㅎㅇ" } ("ㅎㅇ"가 10개)
```

##### freeze
테이블을 읽기 전용으로 만듬

```luau
local asdf = {
    hi = 30
}

print(asdf.hi) -- 30
asdf.good = 100 -- 에러!
```

##### insert
배열에 값을 추가함

```luau
local t = {} -- T

-- 배열 마지막에 값 추가
table.insert(t, "ㅎㅇ") -- t[1] = "ㅎㅇ"
table.insert(t, 2222) -- t[2] = 2222

--[[
T
순서|인덱스|값
1|1|"ㅎㅇ"
2|2|2222
]]

-- 다른 케이스도 있음
-- table.insert(테이블, 인덱스, 값)
-- 배열에 인덱스에 값을 추가하고 뒤에있는 값을 뒤로 미룸
table.insert(t, 2, "엉") -- 배열 t에 2번째 값에 "엉"을 추가하고 뒤의 값을 뒤로 미룸

--[[
T
순서|인덱스|값
1|1|"ㅎㅇ"
2|2|"엉"
3|3|2222
]]
```

##### isfrozen

테이블이 얼려져있는지(table.freeze) 반환함

```luau
local a = {}
local b = {}
table.freeze(b)

print(table.isfrozen(a), table.isfrozen(b))
```

```
출력
false
true
```

##### remove

배열에서 값을 제거하는 함수임
값이 제거되면 뒤의 갚들이 앞으로 한칸씩 밀림
 
예시:
```luau
local t = { 10, 20, 30, 40 }

table.remove(t, 2)

print(t[1], t[2], t[3], t[4])
```

10, 20, 30, 40에서 20이 지워짐

```
출력
10
30
40
nil
```

인덱스를 넣지 않으면 가장 마지막 인덱스를 사용함
```luau
local t = { 10, 20, 30, 40, 50 }

-- 두개가 같다 생각하면됨
table.remove(t)
table.remove(t, #t)
```

---
## 메타테이블

### 메타메소드

#### 연산자 메타메소드

비교 연산자 중에서 Luau에서 실제 내부적으로 구현된 핵심 연산자는 3개임
```luau
A == B -- eq
A < B -- lt
A <= B -- le
```

그 외의 3개 연산자는 위 연산자들을 not을 하거나 순서를 바꿔서 결과를 냄
```luau
A ~= B -- not (A == B)
A > B -- B < A
A >= B -- B <= A
```

#### __call

#### __tostring

#### __len

#### __metatable

#### __index

#### __newindex



--
## 이터레이션


