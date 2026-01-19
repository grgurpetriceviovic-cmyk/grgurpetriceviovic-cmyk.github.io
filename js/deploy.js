async function deploy() {
    const CF_TOKEN = "lk7hKKwiXqnYVYXSFSsGYjP9ItyE5n-tW6asXltx"
    const ACCOUNT_ID = "ab63c3e33af4e10adeb32ace418e4c30"
    const PROJECT_NAME = "site2-75i"

    const fileInput = document.getElementById("file")
    const file = fileInput.files[0]

    if (!file) {
        alert("No file selected")
        return
    }

    const formData = new FormData()

    // path u Cloudflare Pages
    formData.append(
        "d/test.bin",   // path
        file,           // Blob (binary)
        "test.bin"
    )

    const res = await fetch(
        `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/pages/projects/${PROJECT_NAME}/deployments`,
        {
            method: "POST",
            headers: {
                Authorization: `Bearer ${CF_TOKEN}`
            },
            body: formData
        }
    )

    const data = await res.json()
    console.log(data)

    if (data.success) {
        alert("Deploy OK")
    } else {
        alert("Deploy FAILED")
    }
}
