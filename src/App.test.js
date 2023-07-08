it("Test API endpoint", async () => {
  let data;
  try {
    const response = await fetch("https://dummyjson.com/users", {
      mode: "cors",
    });
    data = await response.json();
  } catch (error) {
    console.error(error);
  }

  expect(data).toBeDefined();
});


