const loadPhoto = async () => {
  try {
    // show spinner
    document
      .querySelector("#load-btn .spinner-grow")
      .classList.remove("d-none");
    // make API request
    // const response = await fetch("https://picsum.photos/600");
    const response = await fetch(
      "https://source.unsplash.com/random/?beautiful,girl"
    );

    // create blob URL from response
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);

    // display photo
    document.getElementById("photo").src = url;
    document.getElementById("photo").classList.remove("d-none");

    // hide spinner
    document.querySelector("#load-btn .spinner-grow").classList.add("d-none");
  } catch (error) {
    // handle error
    console.error(error);

    // hide spinner
    document.querySelector("#load-btn .spinner-grow").classList.add("d-none");
  }
};

document.getElementById("load-btn").addEventListener("click", loadPhoto);
