import React from "react";
import { Link } from "react-router-dom";

const GnbDepth2 = ({ sitemap }) => {
    const depth1_path = sitemap.path;
    const depth2 = sitemap.depth2;

    return (
        depth2 && (
            <ul className="depth2">
                {depth2.map((depth2) => {
                    return (
                        <li className="gnb-depth2" key={depth2.path}>
                            <Link to={depth1_path + depth2.path}>
                                {depth2.pagename}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        )
    );
};

export default React.memo(GnbDepth2);
