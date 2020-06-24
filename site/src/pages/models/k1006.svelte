<script>
    import NavBar from './../_components/navBar.svelte'
    import LoginBar from './../_components/loginBar.svelte'

    let files;
    let image_queue = [];

    function setFiles() {
        image_queue = [];
        console.log('Triggered Queue update')

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
</script>

<NavBar />
<LoginBar />

<h1>K1006</h1>
<div class=>
    <input  type='file' accept="image/jpeg, image/png" bind:files on:change={setFiles} multiple>
</div>

<style>
h1 {
    text-align: center;
    text-decoration: underline;
}
</style>
