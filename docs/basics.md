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

```luau
asdf = 30
good = 100
```
에선 환경이 이런식으로 설정되어있을거임

환경 | 변수이름 | 값
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
지역변수란 지역변수를 생성하면 그 지역과 내부 지역에서만 사용할수있고 외부지역에서는 사용을 못하는 변수임

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

## not

not은 boolean에 주로 사용되는 문법임 (아니여도 사용되긴함)

not A에서 A가 (nil 또는 false)이면 true 아니면 false를 반환하는 문법이다
```luau
local a = not false -- true
local b = not nil -- true
local c = not true -- false
local d = not 0 -- false
local e = not "ㅎㅇ" -- false
```

## 비교 연산자
비교연산자는 값을 서로 비교하고 boolean을 반환하는 문법임

Luau에서 실제 내부적으로 구현된 핵심 연산자는 3개임
```luau
A == B -- eq
A < B -- lt
A <= B -- le
```

그 외의 3개 연산자는 위 연산자들을 뒤집거나(`not`) 순서를 바꿔서 결과를 냄.
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

## 비교문


## 반복문

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