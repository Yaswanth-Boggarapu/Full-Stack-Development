
document.getElementById('sub').addEventListener("click", () =>
{
    if (document.getElementById('username').value === 'Yaswanth' && document.getElementById('password').value === 'Kaizoku') {
        document.getElementById("prompt").value = "success";
        window.alert('success');
        console.log("success");
    } else {
        document.getElementById("prompt").value = "failure";
        window.alert('failure');
        console.log("failure");
    }
})

