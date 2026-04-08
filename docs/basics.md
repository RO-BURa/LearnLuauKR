# 기초

## 환경과 변수
Luau에는 변수라는 개념이 있음

변수는 값을 저장하는 저장소 개념임

코드에 <변수이름> = <값>으로 변수를 저장할수있고 이는 **환경**에 저장됨

기본적으로 변수를 생성하면 전역 변수가 됨

전역변수는 어디서나 사용할수있는 변수라는 뜻 (어려운거 아니야)

예시:
```luau
asdf = 30
```
!!! info "참고"
    asdf는 변수 이름이고 30은 값임

    등호는 설정한다는 뜻임

변수에 값을 저장하면 꺼낼수도 있음

```luau
asdf = 30
good = asdf
```

asdf는 30이고

good은 asdf에 저장한 값을 가져와서 30이 됨

**환경**이 정확하게 무엇이냐면 전역에서 쓸수있는(어디서나 쓸수있는) 값들이 저장되어있는 저장소임
변수를 가져오는것도 환경에서 찾아 오는거임

```luau
asdf = 30
good = 100
```
에선 환경이 이런식으로 설정되어있을거임

환경:

순서 | 변수이름 | 값
:---: | :---: | :---:
1 | "asdf" | 30
2 | "good" | 100

이제 변수 이름으로 값을 꺼내올수도 있고 마 다 할수있음

!!! warning "참고"
    변수를 선언할때 띄어쓰기를 붙히지 않아도 괜찮으나 띄어쓰기 붙히는게 국룰임 (안지키면 죽음)
    ```luau
    asdf=200
    ```

### 변수 이름의 규칙
변수 이름엔 영어와 숫자 그리고 _ 밖에 사용하지못함
그리고 숫자로 시작할수없음

!!! success "올바른 변수 선언법"
    ```luau
    aSdF_ = 30
    _ddd12323 = 100
    bob_good = 3.14
    ```

!!! warning "잘못된 변수 선언법"
    이 코드에선 변수 123good가 1(숫자)로 시작하기 때문에 에러가 남
    ```luau
    123good = 111
    ```
---
## 주석
주석은 코드에 쓸수있는 메모장같은 느낌임

```luau
asdf = 30 -- asdf에 30 저장함
-- 메모할수있다 (장식임 코드에 영향 안줌)
```

여러줄도 주석으로 사용 가능

```luau
asdf = 100
--[[ asdfdsfsddsfsdfdsfsdfsd
여러줄의
주석
ㅇ]]
```

---
## 기본 데이터 타입
Luau의 기본 데이터 타입은 총 10개임
```luau
nil
number
boolean
string
table
function
thread
userdata
vector
buffer
```

여기서 현재 알아야하는 데이터 타입은

nil, number, boolean, string이고

여기서 설명할거고 더 많은 데이터타입은 추후 설명할거임

### nil
nil은 비어있는 값 (다른 언어에선 null이라고 생각하면됨) (Luau엔 다른 언어랑 다르게 undefined가 없음)

### number
number은 숫자

### boolean
boolean은 참/거짓 (true와 false)

### string
string은 문자열 (문자를 표현하는 타입)

사용 예제 :
```luau
asdf = 30 -- 숫자
dd = true -- 참 (boolean)
good = false -- 거짓 (boolean)
hi = "안녕 나는 문자열이야" -- 문자
-- nil을 통해서 값을 지울수도 있음 (nil은 없다는 뜻이니깐)
hi = nil -- 이제 hi는 없는거임
good = nil -- 이제 good은 없는거임
```
---
## 숫자 연산자
Luau에서 숫자로 연산을 할수있음

```lua
a = 12
b = -a -- unm: 부호를 반대로 취함 (12이니깐 -12이 되는거) (-12)
c = a + 5 -- add: a에 5를 더한 수를 반환함 (17)
d = a - 5 -- sub: a에 5를 뺀 수를 반환함 (7)
e = a * 5 -- mul: a에 5를 곱한 수를 반환함 (60)
f = a / 5 -- div: a를 5로 나눈 수를 반환함 (2.4)
g = a // 5 -- idiv: a를 5로 나눴을때 결과값이 소수면 가장 가까운 정수로 치환한 수를 반환함 (2)
h = a % 5 -- mod: a를 5로 나눴을때의 나머지를 반환함 (2)
i = a ^ 5 -- pow: a의 5제곱을 반환함 (12 * 12 * 12 * 12 * 12) (248832)
```

---
## 지역

이건 사람에 따라 어렵다고 느낄수 있는 개념임

바로 지역이라는 개념임

코드에는 지역이라는 개념이 있는데 지역을 생성하는 문법이있음

바로 do - end 라는 문법임
```luau
-- 지역 A (기본지역)

do -- 지역 B (*참고: do - end는 지역을 생성하는 문법임)

    -- 여긴 지역 B야!


end -- 지역 B 끝

-- 지역 A 끝
```

### 지역변수
지역변수란 지역변수를 선언하면 그 지역과 내부 지역에서만 사용할수있고 외부지역에서는 접근을 못하는 변수임

내부 지역의 지역변수는 가져올수없고 외부 지역 또는 자기 지역변수만 접근할수있음

**이때 지역변수는 환경에 저장되지않음**

```luau
-- 지역 A (기본지역)

local a = 30 -- 지역변수 생성하는 문법 local <변수이름> = 값
local bob -- 지역변수는 값을 지정하지않으면 값을 nil로 처리함 (local bob = nil 이랑 같음)

do -- 지역 B (*참고: do - end는 지역을 생성하는 문법임)

    -- 여긴 지역 B야!
    local b = 60
    local c = a -- 접근 가능! (30)

end -- 지역 B 끝

local good = b -- 접근 못함 (내부지역에 있는 지역변수에는 접근을 할수없음) (nil)

-- 지역 A 끝
```

지역변수를 사용하면 좋은점이 무엇이냐면
```luau
a = 30
b = 100

c = a + b

-- a와 b는 필요없음 (nil로 설정)
a = nil
b = nil
```
이렇게 안쓰는 변수는 nil로 직접 바꿔야하지만 지역변수를 사용하면
```luau
local c -- (local c에서 값 지정 안하면 = nil을 생략한거 알지?)

do
	
	local a = 30
	local b = 100
	
	c = a + b
	
end
```
이렇게 nil로 값을 지울 필요가없음

Luau엔 국룰이 하나가 있는데 가급적이면 local로 변수를 선언해야함 (국룰임)

---
## 논리 연산자

### not

not은 boolean에 주로 사용되는 문법임 (아니여도 사용되긴함)

not A에서 A가 (nil 또는 false)이면 true 아니면 false를 반환하는 문법임
```luau
local a = not false -- true
local b = not nil -- true
local c = not true -- false
local d = not 0 -- false
local e = not "ㅎㅇ" -- false
```

!!! info "참고"
    not은 **반대**를 반환하는 문법이고
    not은 boolean을 위해 설계되었기 때문에
    not true는 true의 반대인 false고
    not false는 false의 반대인 true임

### and

and는 한국어로 **그리고**임

```luau
A and B
```
에서 A가 (nil 또는 false)면 A 아니면 B를 반환함

(A가 true고 B가 30이면 30을 반환)

(A가 nil이고 B가 true면 nil을 반환)

```luau
local a = true and 30 -- 30 (B)
local b = false and true -- false (A)
local c = nil and "hi" -- nil (A)
local d = 130 and nil -- nil (B)
local e = true and false -- false (B)
```

### or

or은 한국어로 **또는**임

```luau
A or B
```
에서 A가 (nil 또는 false)면 B를 반환하고 아니면 A를 반환함

```luau
local a = true or false -- true
local b = "hi" or "nice" -- "hi"
local c = false or "dd" -- "dd"
local d = false or nil -- nil
local e = nil or "ㅎㅇ" -- "ㅎㅇ"
```

---
## 비교 연산자
비교연산자는 값을 서로 비교하고 boolean을 반환하는 문법임

Luau에서 실제 내부적으로 구현된 핵심 연산자는 3개임
```luau
A == B -- eq
A < B -- lt
A <= B -- le
```

그 외의 3개 연산자는 위 연산자들을 not을 하거나 순서를 바꿔서 결과를 냄.
```luau
A ~= B -- not (A == B)
A >= B -- not (A < B)
A > B -- B < A
``` 
다른 3개의 연산자에 not을 씌운걸 반환함

### A == B
A와 B가 같으면 true 아니면 false
```luau
local a = "엉" == "엉" -- true
local b = 1 == true -- false
```

### A ~= B
A와 B가 다르면 true 아니면 false

not (A == B)와 같음
```luau
local a = 1 ~= 1 -- false
local b = true ~= 300 -- true
```

### A < B
B가 A보다 크면 true 아니면 false
```luau
local a = 3 < 1 -- false
local b = 2 < 50 -- true
local c = -5 < -3 -- true
```

### A > B
A가 B보다 크면 true 아니면 false

B < A와 같음
```luau
local a = 3 > 1 -- true
local b = 2 > 50 -- false
local c = -2 > -2 -- false
```

### A <= B
B가 A랑 같거나 B가 더 크면 true 아니면 false
```luau
local a = 3 <= 3 -- true
local b = 2 <= 5 -- true
local c = 4224 <= 2 -- false
```

### A >= B
A가 B랑 같거나 A가 더 크면 true 아니면 false

not (A < B)와 같음
```luau
local a = 3 >= 4 -- false
local b = 6 >= 6 -- true
local c = 7 >= 3 -- true
```
---
## 비교문

비교문은 위에서 배운 비교 연산자와 궁합이 아아주우ㅜㅜ 좋음

### if

먼저 기본 문법은
```luau
-- 지역 A

if <조건> then -- 지역 B
    <코드>
end -- 지역 B 끝

-- 지역 A 끝
```
이고
<조건>이 (nil 또는 false)가 아니면 <코드>를 실행함

!!! info "참고"
    if문도 do - end처럼 지역이 새로 생성됨

예시:
```luau
if 0 then
    -- 실행됨
end
if true then
    -- 실행됨
end
if false then
    -- 실행 안됨
end
if nil then
    -- 실행 안됨
end
if 3 > 5 then
    -- 3은 5보다 크지 않기 때문에 실행안됨
end
```

### else

비교문엔 else를 추가할수 있음
```luau
if <조건> then
    <코드1>
else
    <코드2>
end
```

<조건>이 맞으면 <코드1>을 실행하고 아니면 <코드2>를 실행함

예시:
```luau
if false then
    -- 실행 안됨
else
    -- 실행됨
end
```

### elseif

비교문에 elseif도 추가할수있음

elseif는 또 다른 조건을 추가하는 문법임

```luau
if <조건1> then
    <코드1>
elseif <조건2> then
    <코드2>
    -- elseif를 더 추가하거나 else도 추가할수있음
    -- else
end
```

먼저 <조건1>을 확인하고 맞으면 <코드1>을 실행함
만약 <조건1>이 안맞으면 다음 조건을 확인하고 그 조건이 맞으면 그 조건의 코드를 실행함 아니면 다음 조건으로 넘어감

예시:
```luau
if false then
    -- 실행 안됨
elseif 3 > 5 then
    -- 실행안됨
elseif true then
    -- 실행됨
else
    -- 실행안됨
end
```

아직도 elseif가 이해되지않는다면
위코드와 아래코드가 똑같이 작동한다고 이해하면 됨
```luau
if false then
    -- 실행 안됨
else
    if 3 > 5 then
        -- 실행 안됨
    else
        if true then
            -- 실행됨
        else
            -- 실행안됨
        end
    end
end
```
---
## 함수

함수는 코드를 저장하고 저장한 코드를 언제나 실행 할수 있는 개체임

함수를 생성하는 방법은 밑에 코드와 같음
```luau
function() -- 새 지역 생김
    <코드>
end -- 새 지역 끝
```
이렇게 생성할수있고 내부에 새로운 지역이 생김

함수 내부의 코드는 **실행이 되지않고 저장됨**

function() <코드> end 문법은 생성후 함수 개체를 반환함

저장한 코드(함수)를 실행하는법은

함수 뒤에 ()를 붙히면 됨

```luau
local a = 0 -- a는 0
-- 지역변수 add1에 함수 저장
local add1 = function()
    a = a + 1 -- 변수 a를 1 증가시키는 코드
end

local asdf = add1 -- 함수도 숫자나 문자처럼 개체임
-- (asdf == add1) -- true
add1() -- 함수 뒤에 ()를 붙혀서 코드를 실행 (저 내부 코드가 실행됨)
asdf()
add1()

-- add1 함수가 총 3번 실행되고 a는 결과적으로 3이됨
```
### 매개변수

함수에는 매개변수(paramater)라는 개념이 있는데

매개변수란 함수를 실행할때 값을 받을수 있는 지역변수임

이때 받는 값을 인수(argument)라고 부름
```luau
local a = 0

local dd = function(n) -- 매개변수로 n을 받는거임 (함수를 실행할때 n에 값을 넣을수있음)
    a = a + n -- 변수 a에 n을 더함
end


dd(2) -- 변수 n이 2인 상태로 함수 내부 코드가 실행됨 (변수 순서에 맞게 됨)
dd(5) -- n에 5가 들어가고 코드가 실행됨
-- 결과적으로 a는 7이 될거임 (0 + 2 + 5)
```

매개변수에서 값을 여러개 받을수도있음
```luau
local a = 0

local dd = function(n, x)
    local total = n + x
    a = a + total
end

dd(3, 2) -- n에 3이 들어가고 x에 2가 들어간 상태로 코드가 실행됨 
dd(2, 2) -- n에 2가 들어가고 x에 2가 들어간 상태로 코드가 실행됨
```

!!! info "참고"
    쉼표 뒤에 띄어쓰기 하나 붙혀주는건 국룰임
    ```luau
    1, 2, 3, 4, 5
    ```

!!! info "참고"
    함수에 매개변수를 전달할때 내부적으로 매개변수의 길이 정보도 같이 보냄

    글케까지 중요한건 아니고 알면 좋은 정보임
    ```luau
    local dd = function() end

    -- 길이 2 | "hi", true
    dd("hi", true)

    -- 길이 1 | nil
    dd(nil)
    ```

### 반환

함수는 실행했을때 값을 반환할수있음

반환을 하는법은 함수 내부에서
```luau
return <반환할값>
```
으로 봔한할수있음

```luau
local dd = function(a, b)
    -- return <반환할값>
    return a + b
end

local a = dd(1, 2) -- 3 (1과 2가 a와 b로 들어가고 a + b는 3이고 3을 반환하기때문에 dd(1,2)를 3처럼 쓸수있음)
local b = dd(1, dd(4, 5)) -- 10
```

### 유명한 내장 함수들

내장함수들은 기본적으로 전역변수처럼 **환경**에 미리 있는 값이기 때문에 함수의 이름을 입력만해서 불러올수있음
이 외에도 많지만 기초이기 때문에 알아야 하는것만 설명함

#### tostring
tostring은 Luau에 기본으로 내장되어있는 함수임

tostring은 어떤것이든지 문자로 바꿔서 반환해줌

내부적으로 C++로 만들어진 함수임
```luau
local a = tostring(30) -- "30" (30과 "30"은 엄연히 다름)
local b = tostring(true) -- "true"
local c = tostring(nil) -- "nil"
local d = tostring("이거 이미 문자임😭") -- "이거 이미 문자임😭"
tostring() -- tostring 함수는 실행할때 인수를 안넣으면 에러남 (tostring을 실행할때 인수들의 길이가 1 이상이여야함)
```

#### tonumber
tonumber도 tostring과 비슷한데

tostring이 문자열로 바꾸는거였다면 tonumber은 숫자로 바꿔서 반환해줌

내부적으로 C++로 만들어진 함수임
```luau
local a = tonumber("123") -- 123
local b = tonumber(2) -- 2
local c = tonumber("이건 숫자로 어떻게 바꿀껀데 ㅋ") -- nil (숫자로 못바꾸면 nil)
tonumber() -- tonumber 함수는 실행할때 인수를 안넣으면 에러남 (tostring처럼 최소 한개의 인수를 요구함)
```

#### print
Luau를 https://play.luau.org/ 또는 Roblox Studio에서 실행하는경우 **print**라는 내장함수가 **환경**에 존재함
(*엔진에 따라 없을수도 있는데 보통 비슷한 함수가 하나는 있을거임)

일반적으로 print 함수는 출력에 텍스트가 뜨는 함수이기 때문에 내부적으로 C++로 구현되어있음
```luau
print() -- 길이 0의 인수를 출력함
print("안녕") -- "안녕"을 출력함
print(30) -- 30을 출력함
print("여러개도", "가능함")
```

---
## 반복문

반복문은 반복하여 코드를 실행하는 문법임

### for

for의 사용법은

```luau
-- 참고로 변수 이름 국룰 이름은 i 임
for <변수이름> = <기본값>, <최대값>, <증가값> do
    <코드>
end
```

내부에서 변수를 하나 지정하는데 그 변수가 반복마다 <증가값>씩 증가하고
변수가 <최대값>이랑 같거나 더 커지면 반복을 멈춤
참고로 반복마다 <코드>를 실행함

예시:
```luau
-- i의 기본값은 1이고 i가 10이 될때까지 반복하고 1씩 증가함
local total = 0
for i=1, 10, 1 do
    total = total + i
end

-- total은 1 + 2 + 3 + ... + 9 + 10임 (55)
print(total) -- 55 (후 드디어 함수 배워서 print 쓸수있다 ㅎ)
```

```
출력
55
```

<증가값>은 입력하지 않아도됨 (기본값이 1)

예시:
```luau
local total = 0
-- <증가값>을 입력하지 않으면 기본값인 1로 설정됨
for i=1, 10 do -- i=1, 10, 1이랑 같음
    total = total + i
end

print(total) -- 55
```

```
출력
55
```

### while

while은 <조건이> (nil 또는 false)가 아닌동안 <코드>가 반복적으로 실행됨
```luau
while <조건> do
    <코드>
end
```

예시:
```luau
local n = 0
while n < 10 do -- n보다 10이 더 크면 true 아니면 false (<조건>이 true인 동안 실행됨)
    n = n + 1 -- n에 1을 더하는 코드
    print(n)
end
```

```
출력
1
2
3
4
5
6
7
8
9
10
```

### repeat

repeat은 <조건>이 (nil 또는 false)가 아닐때까지 <코드>를 실행함

```luau
repeat
    <코드>
until <조건>
```

예시:
```luau
local n = 0

repeat
    n += 1
    print(n)
until n >= 10

```

```
출력
1
2
3
4
5
6
7
8
9
10
```

!!! info "참고"
    repeat은 <조건>을 확인하고 <코드>를 실행하는것이 아닌 <코드>를 실행하고 <조건>을 확인함

    ```luau
    repeat
        print("이거실행되나?")
    until true
    ```

    ```
    출력
    이거 실행 되나?
    ```

### break

break는 아주쉬움

break는 반복문 내부에서 반복을 끊는 문법임

```luau
for i=1, 10 do
    print(i)
    if i == 5 then -- i가 5면
        break -- 반복을 끊음
    end
end
```

```
출력
1
2
3
4
5
```

for 외에도 모든 반복문에서 사용 가능함

### continue

continue는 반복문 내부에서 반복을 한번 건너뛰는 문법임

```luau
for i=1, 6 do
    if i == 3 then
        continue
    end
    print(i)
end
```

```
출력
1
2
4
5
6
```

for 외에도 모든 반복문에서 사용 가능함

---
## 기초를 마치며 알아야하는 규칙들

### 문자 연산자
```luau
local a = "hi"
local b = "bob"
local c = a .. b -- c는 "hibob"이 됨
```
!!! info "참고"
    .. 연산자를 concat이라고 부름 (번역: 연결)

### 단축 연산자
```luau
local a = 12
local b = a
b += 5 -- b = b + 5
local c = a
c -= 5 -- c = c - 5
local d = a
d *= 5 -- d = d * 5
-- ...
-- 이 외에도 나눗셉 제곱 다 있고 ..=도 있음
```

!!! info "참고"
    asdf

!!! success "꿀팁"
    asdf

!!! warning "주의"
    asdf

!!! danger "위험"
    asdf

| 왼쪽 정렬 | 가운데 정렬 | 오른쪽 정렬 |
| :--- | :---: | ---: |
| 1 | 2 | 3 |
| Apple | Banana | Cherry |