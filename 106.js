// DRY RULL DON'T REPEAT YOURSELF. when i learned loop i heard about this rule..

var count = 1;
while(count < 6) {
    console.log("count is :" + count);
    count = count + 1
};


// function naver_keycnt() { 
//     var head = document.getElementsByTagName('head')[0];
//     var jScript; 
//     jScript = document.createElement('script');
//     jScript.language = 'javascript'; 
//     jScript.src = 'https://www.ryo.co.kr/asset/bookmarklet/naver_keycnt.js'; 
//     jScript.type = 'text/javascript'; 
//     head.appendChild(jScript); 
// } 

// naver_keycnt();





// ////////////////////////////////////////////////////////////////////////////////////////////////////
// // jsonp 방식으로 서버에 호출
// //
// // param string 키워드
// // param string 콜백메스도
// ////////////////////////////////////////////////////////////////////////////////////////////////////
// function _ryo_get_keyword_count(ps_keyword, ps_callback, ps_position)
// {
// 	//alert(ps_keyword);
// 	if ( ! ps_keyword )
// 	{
// 		alert('검색어가 비었습니다');
// 		return false;
// 	}


// 	var s_keyword = encodeURIComponent(ps_keyword.toUpperCase().replace(/ /g,'')); // 공백제거하고, 영단어일경우소문자는대문자로바꾸고(안그럼검색오류남),인코딩까지..
// 	var j = document.createElement('script');

	
// 	var u = 'https://www.ryo.co.kr/naver/keyword?position=' + ps_position + '&callback=' + ps_callback + '&dn=&keyword=' + s_keyword;

// 	j.setAttribute('src', u);
// 	j.setAttribute('type', 'text/javascript');
// 	document.getElementsByTagName('body')[0].appendChild(j);

// 	return false;
// }

// function _ryo_dn2encode(param) {
// 	var r='';
// 	for ( var i=0; i<param.length; i++) {
// 		r+=param.charCodeAt(i);
// 		if (i<param.length-1) r+=',';
// 	}
// 	return encodeURIComponent(r);
// }


// ////////////////////////////////////////////////////////////////////////////////////////////////////
// // 북마클릿을 클릭했을 때 최초 실행되는 지점임
// // 현재 검색어 조회수 확인 / 출력
// ////////////////////////////////////////////////////////////////////////////////////////////////////

// if ( ! document.getElementById('o_div_keycnt') ) // 이미 조회한 결과가 출력되어 있으면 다시 조회하지 않음
// {
// 	var s_naver_search_keyword = document.getElementById('nx_query').value; // 검색폼에 적힌 검색어
// 	//alert(s_naver_search_keyword);
// 	_ryo_get_keyword_count(s_naver_search_keyword, 'set_keyword_cnt', 'main');
// }


// // jsonp 콜백
// function set_keyword_cnt(po_json)
// {
// 	_set_keyword_cnt_core(po_json);

// 	get_relate_keyword_cnt()
// }

// // 현재 검색어 조회수 출력
// function _set_keyword_cnt_core(po_json)
// {
// 	// 조회수
// 	var o_div_keycnt = document.createElement('div');
// 	o_div_keycnt.id="o_div_keycnt";
// 	o_div_keycnt.innerHTML='<div id="keyword_cnt" style="margin-right: 510px; text-align: right; padding-top: 10px; font-weight: bold; color: blue;">' + 'pc:' + po_json.monthlyPcQcCnt + ' &nbsp; &nbsp; m:' + po_json.monthlyMobileQcCnt + '</div>';


// 	// 조회수 화면에 출력
// 	var o_div = document.getElementsByClassName('search_area')[0]; // 출력지점 지정
// 	o_div.appendChild(o_div_keycnt); // 출력
// }

// ////////////////////////////////////////////////////////////////////////////////////////////////////
// // 연관검색어 조회수 출력
// ////////////////////////////////////////////////////////////////////////////////////////////////////
// //var relate_keyword_index = 0;

// // 연관검색어 조회수 출력 (아래 트리거 실행에 따른 콜백)
// function set_relate_keyword_cnt(po_json)
// {
// 	// 연관검색어 영역 펼쳐 놓기
// 	var o_dd = document.getElementsByClassName('lst_relate')[0];
// 	o_dd.getElementsByTagName('ul')[0].style.overflow = 'visible';

// 	////////////////////////////////////////////
// 	// find index
// 	// 검색한 키워드(po_json.relKeyword)와 연관검색어들중에서 같은 키워드를 찾아서 인덱스를 확인
// 	////////////////////////////////////////////
// 	var relate_keyword_index = 0;
// 	var a_relate_keyword = _get_relate_keyword();

// 	for ( var i in a_relate_keyword ) {
// 		if ( po_json.relKeyword == a_relate_keyword[i].toUpperCase() ) // 검색한 키워드에 해당하는 연관키워드를 찾았다! (또한 영단어는 조회수 구할 때 오류를 피하기 위해 대문자로 변환했기 때문에 기준이 되는 연관단어도 대문자로 변환하여 비교 함)
// 		{
// 			relate_keyword_index = i; // 현재의 연관키워드 인덱스가 검색한 키워드의 인덱스이다
// 		}
// 	}

// 	// 연관검색어 조회수 출력
// 	var o_a = o_dd.getElementsByTagName('a')[relate_keyword_index];
// 	o_a.innerHTML += '<span style="color: green;">(pc:' + ' ' + po_json.monthlyPcQcCnt + ' m:' + po_json.monthlyMobileQcCnt +')</span>';

// //	relate_keyword_index++;

// }


// // 현재 검색어 조회수 출력후 실행될 트리거
// function get_relate_keyword_cnt()
// {
// 	li_2_table();

// 	var a_relate_keyword = _get_relate_keyword();

// 	var i = 0;
// 	var n_term = 250; // 0.2초 (1초=1000)
// 	_recursive_call(a_relate_keyword, i, a_relate_keyword.length, n_term);

// }

// // 너무 네이버에 요청하면, 네이버가 에러를 내서, 시간 텀을 둠
// function _recursive_call(pa_relate_keyword, pn_index, pn_max, pn_term)
// {
// 	setTimeout(
// 		function() {
// 			_ryo_get_keyword_count(pa_relate_keyword[pn_index], 'set_relate_keyword_cnt', 'relate');

// 			if (pn_index == pn_max-1)
// 			{
// 				return false;
// 			}

// 			pn_index++;
// 			_recursive_call(pa_relate_keyword, pn_index, pn_max, pn_term);
// 		},
// 		pn_term
// 	);
// }

// // 검색결과에서 연관검색어를 찾아서 배열로 리턴
// function _get_relate_keyword()
// {

// 	var a_dd = document.getElementsByClassName('lst_relate')[0];

// 	if ( a_dd ) {
// 		var a_keyword = a_dd.getElementsByTagName('a');
// 		var s_keyword = '';
// 		var a_total_keyword = new Array();

// 		for ( var i in a_keyword ) {
// 			if ( a_keyword[i].innerText ) {
// 				s_keyword = a_keyword[i].innerText.replace(/ /g,'');
// 				a_total_keyword.push(s_keyword);
// 			}
// 		}

// 		return a_total_keyword;
// 	}

// 	return false;
// }

// function li_2_table()
// {
// 	var a_dd = document.getElementsByClassName('lst_relate')[0];
// 	var a_li = a_dd.getElementsByTagName('li');

// 	var s_table = '<div style="padding-top: 20px;"><table class="table_relate_keyword" style="margin-top: 20px;">';
// 	for ( var i in a_li ) {
// 		//alert(a_li[i].innerHTML);

// 		if ( a_li[i].innerHTML ) // 맨 끝부분엔 값이 빈 li가 있을 수 있어서, 이 조건을 넣지 않으면 td안에 undefine이란 글자가 출력된다
// 		{
// 			s_table += '<tr>';
// 			s_table += '<td class="relate_keyword_wrapper">' + a_li[i].innerHTML + '</td>';
// 			s_table += '</tr>';
// 		}
// 	}
// 	s_table += '</table></div>';

// 	//a_dd.innerHTML += s_table;
// }