/* global kakao */
import React, { useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const { kakao } = window;

const Container = styled.section`
    width: 100%;
    height: 400px;
    margin-top: 40px;
    margin-bottom: 10%;
    font-family: 'Nanum Myeongjo', serif;
    display: flex;
    justify-content: space-around;
`
const Section1 = styled.div`
    width: 40%;
    margin-right: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const Section2 = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`
// section 1
const SearchForm = styled.form`
    width: 100%;
    height: 30px;
    position: relative;

`
const SearchBar = styled.input`
    width: 100%;
    height: 28px;
    border: 1px solid #A2A2A6;
    border-radius: 15px;
    padding: 10px 20px;
    margin-bottom: 10px;
    resize:none;
    ::placeholder {
        color: #A2A2A6;
        font-size: 11px;
    }
    :focus {
        outline-color: ${props=>props.theme.searchBarBorderColor};
    }
`
const SearchBtn = styled.button`
    position: absolute;
    right: 0;
    top: 15%;
    margin-right: 8px;
    width: 40px;
    border-style: none;
    background: none;
    cursor: pointer;
    color: #A2A2A6;
    font-size: 15px;
`

const ScrollDiv = styled.div`
    height: 85%;
    overflow-y: scroll;
    ::-webkit-scrollbar {
        width: 10px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: #9F9E9E;
    }
    ::-webkit-scrollbar-track {
        background-color: #D9D9D9;
    }
`

const MarkerItem = styled.li`
    display: flex;
    margin-bottom: 20px;
`

const MarkerIcon = styled.div`
    width: 15%;
`
const Marker = styled.div`
    width: 35px;
    height: 35px;
    border-radius: 50% 50% 50% 0;
    background: ${props=>props.theme.markerBackColor};
    display: flex;
    justify-content: center;
    align-items: center;
    transform: rotate(-45deg);
    span {
        transform: rotate(45deg);
        color: white;
        font-weight: 700;
    }
`
const MarkerInfo = styled.div`
    width: 85%;
`

const ItemTitle = styled.div`
    color: ${props=>props.theme.markerBackColor};
    font-weight: 700;
    padding-bottom: 7px;
`
const ItemAddress = styled.div`
    font-size: 14px;
    padding-bottom: 7px;
`
const ItemTel = styled.div`
    font-size: 14px;
`

// section 2
const GuideDiv = styled.div`
    font-size: 11px;
    height: 30px;
    text-align: right;
    color: #A2A2A6;
`
const MapDiv = styled.div`
    width: 100%;
    height: 350px;
`

const markerdata = [
    {
        num : 1,
        title : '심리상담소 턴',
        address : '서울 강남구 선릉로 431 1110호',
        tel : '02-512-2680',
        lat : 37.5036273,
        lng : 127.0490616,
    },
    {
        num : 2,
        title : '심리상담소 마음의 공간',
        address : '서울 강남구 역삼로 228 한성빌딩 405호',
        tel : '0507-1340-5628',
        lat : 37.4968615,
        lng : 127.0417397,
    },
    {
        num : 3,
        title : '마음돌봄상담센터 선릉상담소',
        address : '서울 강남구 선릉로86길 31 롯데골드로즈 2차, 828호',
        tel : '0507-1344-9133',
        lat : 37.5043878,
        lng : 127.051969,
    },
    {
        num : 4,
        title : '성신 아동 청소년 교육상담소',
        address : '서울 강남구 선릉로86길 31 선릉역 롯데골드로즈2',
        tel : '02-567-7685',
        lat : 37.5043307,
        lng : 127.0519973,
    },
];

function ClinicMap () {
    useEffect(() => {
        let container = document.getElementById("map");
    
        let options = {
          center: new window.kakao.maps.LatLng(37.5043307, 127.0519973),
          level: 6,
        };
    
        const map = new window.kakao.maps.Map(container, options);
        
        markerdata.forEach((el) => {
            new kakao.maps.Marker({
                //  마커가 표시될 지도
                map: map,
                // 마커가 표시될 위치
                position: new kakao.maps.LatLng(el.lat, el.lng),
                // 마커 hover시 나타날 title
                title: el.title,
            });
        });

        // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
        var zoomControl = new kakao.maps.ZoomControl();
        map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
    
        // console.log("loading kakaomap");
    }, []);

    return (
        <Container>
            <Section1>
                {/* version 1 : 직접 입력 */}
                <SearchForm>
                    <SearchBar placeholder="지역(읍/면/동) 을 입력해주세요." />
                    <SearchBtn><FontAwesomeIcon icon={faMagnifyingGlass} /></SearchBtn>
                </SearchForm>
                <ScrollDiv>
                    <ul>
                        {markerdata.map(i=>
                            <MarkerItem key={i.num}>
                                <MarkerIcon><Marker><span>{i.num}</span></Marker></MarkerIcon>
                                <MarkerInfo>
                                    <ItemTitle>{i.title}</ItemTitle>
                                    <ItemAddress>{i.address}</ItemAddress>
                                    <ItemTel>{i.tel}</ItemTel>
                                </MarkerInfo>
                            </MarkerItem>
                        )}
                    </ul>
                </ScrollDiv>
            </Section1>
            <Section2>
                <GuideDiv>
                    <p>* 국가공인 상담자격증 보유 상담소가 모두 노출되며 상담소는 한울과 무관합니다.</p>
                </GuideDiv>
                <MapDiv id="map"></MapDiv>
            </Section2>
        </Container>
    )
}
export default ClinicMap;