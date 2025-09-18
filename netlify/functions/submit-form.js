exports.handler = async (event, context) => {
  if (event.httpMethod === "POST") {
    const data = JSON.parse(event.body);

    const { name, mobile, email, package: pkg } = data;

    console.log("Form Data Received:");
    console.log("Name:", name);
    console.log("Mobile:", mobile);
    console.log("Email:", email);
    console.log("Package:", pkg);

    return {
      statusCode: 302,
      headers: {
        Location: "/thank.html" // redirect to thank you page
      },
    };
  }

  return { statusCode: 405, body: "Method Not Allowed" };
};
