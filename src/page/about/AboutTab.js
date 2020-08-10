import React from "react";
import TabTemplate from "../../components/TabTemplate";

const AboutTab = () => {
    const tabData = [
        {
            id: 1,
            tabTitle: "탭1번",
            tabContents: "탭 컨텐츠 1번 입니다.",
        },
        {
            id: 2,
            tabTitle: "탭2번",
            tabContents: "탭 컨텐츠 2번 입니다.",
        },
        {
            id: 3,
            tabTitle: "탭3번",
            tabContents: "탭 컨텐츠 3번 입니다.",
        },
        {
            id: 4,
            tabTitle: "탭4번",
            tabContents: "탭 컨텐츠 4번 입니다.",
        },
    ];

    /*
            <ul className="tab-menu">
                <li>
                    <a href="#menu1">메뉴1</a>
                </li>
                <li>
                    <a href="#menu2">메뉴2</a>
                </li>
                <li>
                    <a href="#menu3">메뉴3</a>
                </li>
                <li>
                    <a href="#menu4">메뉴4</a>
                </li>
            </ul>
            <div className="tab-contents">
                <div id="menu1">탭메뉴1번 info</div>
                <div id="menu2">탭메뉴1번 info</div>
                <div id="menu3">탭메뉴1번 info</div>
                <div id="menu4">탭메뉴1번 info</div>
            </div>
    */
    return (
        <section className="about-tab">
            <p>탭 기능 만들어보기</p>
            <TabTemplate tabData={tabData}></TabTemplate>
        </section>
    );
};

export default React.memo(AboutTab);
