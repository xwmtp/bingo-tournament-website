import Header from "./Header";
import React, {PropsWithChildren} from "react";

const Page: React.FC = (props) => {
    return (
        <div>
            <Header/>
            {props.children}
        </div>
    );
}

export default Page;
