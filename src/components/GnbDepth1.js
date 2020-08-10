import React from "react";
import { Link } from "react-router-dom";

const GnbDepth1 = ({ children, sitemap }) => {
    const depthLink = sitemap.path;
    const depthPageName = sitemap.pagename;
    const depth2 = sitemap.depth2;
    console.log(!depth2);

    return (
        <li className={`gnb-depth1 ${!depth2 ? "isDepth2" : ""}`}>
            <Link to={depthLink}>{depthPageName}</Link>
            {children}
        </li>
    );
};

export default React.memo(GnbDepth1);
