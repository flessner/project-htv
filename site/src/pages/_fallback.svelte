<script>
    import { url } from '@sveltech/routify'
</script>

<div class="e404">
  <div class="huge">404</div>
  <div class="big">Page not found.
  <a href={$url('/')}>Go back</a>
  </div>
</div>

<style>
  .huge {
    font-size: 12rem;
  }
  .e404 {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
</style>
