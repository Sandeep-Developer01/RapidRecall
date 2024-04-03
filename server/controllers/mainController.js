exports.homepage = async(req, res) => {
    const locals = {
        title: "NodeJs RapidRecall",
        description: "Free NodeJS Notes app."
    };

    res.render("index", {
        locals,
        layout: "../views/layouts/front-page"
    });
}

exports.about = async(req, res) => {
    const locals = {
        title: "About - NodeJs Notes",
        description: "Free NodeJS Notes app."
    };

    res.render("about", locals);
}