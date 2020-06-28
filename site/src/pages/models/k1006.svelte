<script>
    import NavBar from './../_components/navBar.svelte'
    import LoginBar from './../_components/loginBar.svelte'

    let files;
    let image_queue = [];

    function setFiles() {
        image_queue = [];
        console.log('Triggered Queue update, files are:')

        async function readAndPreview(file) {
            var reader = new FileReader();
            reader.addEventListener("load", function () {
                image_queue.push([file.name, this.result]);
            }, false);
            reader.readAsDataURL(file);
            }

        if (files) {
            [].forEach.call(files, readAndPreview);
        }
        console.log(image_queue)
    }

    function clearResults() {
        console.log('Results cleared')
    }
</script>

<NavBar />
<LoginBar />

<h1>K1006</h1>
<div class='file-actions'>
    <input  type='file' accept="image/jpeg, image/png" bind:files on:change={setFiles} multiple>
    <button on:click={clearResults}><b>Clear</b></button>
</div>

<style>
h1 {
    text-align: center;
    text-decoration: underline;
}

.file-actions {
    justify-content: space-around;
    align-items: center;
    display: flex;
}

.file-actions button {
    padding: 8px;
    width: 120px;
    text-align: center;
    border-radius: 5px;
    color: #FFF;
    background: rgb(141, 2, 31);
}
</style>
