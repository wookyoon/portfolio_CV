import React from 'react';
const path = process.env.PUBLIC_URL;

function ReactP() {
	return (
		<section id='reactp'>
			<div className='inner'>
				<div className='info'>
					<h1>REACT Project</h1>
				</div>
				<div className='wrap'>
					<div className='pic'>
						<video src={`${path}/img/vid2.mp4`} loop autoPlay muted></video>
					</div>
					<div className='title'>
						<h1>리액트 기반 기업형 웹사이트</h1>
						<h2>구성요소</h2>
						<ul>
							<li>부서 소개</li>
							<li>사진 갤러리</li>
							<li>영상 갤러리</li>
							<li>고객 게시판</li>
							<li>찾아오는길</li>
							<li>회원가입</li>
						</ul>
						<a href='https://wookyoon.github.io/portfolio_React/'>CLICK</a>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ReactP;
