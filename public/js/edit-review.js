async function editFormHandler(event) {
  event.preventDefault();

  const title = document
    .querySelector('input[name="review-title"]')
    .value.trim();
  const content = document.querySelector('input[name="content"]').value.trim();
  console.log(title);
  console.log(content);

  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  const response = await fetch(`/reviews/editreview/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      title,
      content,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard/");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".edit-review-form")
  .addEventListener("submit", editFormHandler);
