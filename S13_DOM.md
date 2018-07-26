# The DOM
What is Dom? : Document Object Model

The documnent object model is the interface between your JS and HTML + CSS

The process : Select an element and then Manipulate.
(is likely to the ways operatings SELENIUM? 셀레니움 쓰는거랑 비슷한건가?)


```151```
There are 5 main methods we're going to talk about in this video

1. document.getElementById()
2. document.getElementsByClassName()
3. document.getElementsByTagName()
4. document.querySelector()
 > 쿼리 셀렉터를 쓰는게 훨씬 편하다. (tagnames , #id , .class 사용 가능.)
 > ("li a.special") 이런식으로도 사용가능!
 > 즉 CSS 셀렉터를 쓰는것과 동일하게 사용가능하다는 것.
5. document.querySelectoraAll()

```154```
Manipulating Style.

Dom Manipulation
* changing an element's style
* adding/removing classes 
* changing the content of a tag
* changing attributes (src , href , etc.)

> The Idea : Seperation of Concerns.

Manipulating CSS, Html by JS : Rather thna directly manipulating,
we can define CSS class and then toggle it on or off with JS!
: 자바스크립트로 CSS 클래스 만들어서 그거 클래스 추가 시켜주기.
: 직접 CSS 파일 수정하는 것 지양하기 > seperaiton of concerns.

>tag.classList.add("Some-class") or

>tag.classList.remove("Some-class")


```155```
Manipulating Text and Content

str.textContent : content 안에 text를 보여줍니다.

str.innerHTML : content 안에 html이 있을 경우. 보여주고 html tag를 사용하여 수정가능.

```156```
Manipulating Attributes.



