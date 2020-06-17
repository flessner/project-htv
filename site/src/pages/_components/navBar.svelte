<script>
  import { url, isActive } from "@sveltech/routify";
  const _links = [
    ["/index", "Home"],
    ["/models", "Models"],
    ["/reset", "Reset"],
  ];
</script>

<style>
  aside {
    text-align: center;
  }
  .nav {
    margin: 0;
    padding: 16px;
    width: 100%;
    background: rgb(43, 43, 43);
    box-shadow: 0px 5px 20px 5px rgba(0, 0, 0, 0.075);
    display: inline-block;
  }
  .link {
    padding: 0 16px;
    width: 64px;
    display: inline-block;
    color: white;
  }
  .active {
    font-weight: bold;
  }
</style>

<aside>
  <div class="nav">
    {#each _links as [path, name]}
      <a class="link" class:active={$isActive(path)} href={$url(path)}>
        {name}
      </a>
    {/each}
  </div>
</aside>
