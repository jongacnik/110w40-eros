<div class="g pb0 dx xjb xdc psr z2 bold" md="xdr">
  <div class="h2 tac mb1" md="mb0">
    <a href="<?= $site->url() ?>" class="ttu bold" md="ttn"><?= $site->title() ?></a>
    <br class="db" md="dn">
    <? foreach (page('volumes')->children()->visible() as $volume) : ?>
      <span class="no-pointer volume-hover bold ttu <? e($volume->isActive(), 'hover') ?>" md="ttn" data-hoversync="<?= $volume->url() ?>"><?= $volume->title() ?></span>
    <? endforeach ?>
    <? if ($page->parent()->slug() === 'volumes') : ?>
      <span class="pl2"><a data-drawer-trigger="contents">Contents</a></span>
    <? endif ?>
  </div>
  <div class="dx xw xjc nav-links pb1 c10 co1" md="wauto  co0 pb0 px0">
    <? foreach ($site->children()->visible() as $section) : ?>
      <span class="px1" md="px0 pl3">
        <a data-drawer-trigger="<?= $section->slug() ?>"><?= $section->title() ?></a>
      </span>
    <? endforeach ?>
  </div>
</div>