<script>
  import { url, isActive } from "@sveltech/routify";
  const _links = [
    ["/index", "Home"],
    ["/models", "Models"]
  ];
</script>

<nav class='nav'>
  <div class='nav-logo'>
    <img alt='Flessner' src='/assets/common/logo.svg' style='height: 30px;'>
  </div>
  <ul class='nav-links'>
    {#each _links as [path, name]}
      <li><a class='nav-link' class:active={$isActive(path)} href={$url(path)}>
        {name}
      </a></li>
    {/each}
  </ul>
</nav>

<style>
  .nav {
    margin: 0;
    padding: 8px 0;
    width: 100%;
    background: rgb(40, 40, 40);
    justify-content: space-around;
    align-items: center;
    display: flex;
  }
  .nav-links {
    margin: 8px 8px;
    list-style-type: none;
    display: flex;
  }
  .nav-link {
    padding: 0 16px;
    width: 64px;
    display: inline-block;
    color: white;
  }
  .nav-logo {
    color: white;
  }
  .active {
    font-weight: bold;
  }
</style>
