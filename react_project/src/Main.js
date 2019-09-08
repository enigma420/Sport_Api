import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { withLocalize } from "react-localize-redux";
import globalTranslations from "./translations/global.json";

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.props.initialize({
            languages: [
                { name: "Polish" , code: "pl"},
                { name: "English", code: "en" }
            ],
            translation: globalTranslations,
            options: { renderToStaticMarkup }
        });
    }

    render() {
        // render Main layout component
    }
}

export default withLocalize(Main);