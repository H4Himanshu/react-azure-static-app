module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const headerColor = "Red";
    const headerColorTitle = "Pink";

    console.log("HEADER_COLOR::::::" + headerColor);
    console.log("HEADER_TITLE_COLOR::::::" + headerTitleColor);

    context.res = {
        status: 200,
        body: { headerColor, headerColorTitle }
    }
}