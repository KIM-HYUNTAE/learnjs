function getMemo() {
  const memo = document.getElementById("memo").value;
  console.log(memo);
  fetch(`http://localhost:3000/${memo}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.m_content);
      document.getElementById("m_content").innerHTML = data.m_content;
    });
}
