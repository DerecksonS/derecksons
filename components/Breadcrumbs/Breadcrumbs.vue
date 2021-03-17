<template>
    <ol class="breadcrumbs" itemscope="" itemtype="http://schema.org/BreadcrumbList">
        <li class="hide-element" itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem" key="firstItem">
            <a itemprop="item" typeof="WebPage" href="/" title="Dereckson Santana - Frontend Developer">
                <span itemprop="name">Dereckson</span>
            </a>
            <meta itemprop="position" content="1">
        </li>
        <li class="breadcrumb-item" itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem" key="secondItem">
            <a itemprop="item" typeof="WebPage" href="" :title="pageName">
                <span itemprop="name">{{ pageName }}</span>
            </a>
            <meta itemprop="position" content="2">
        </li>
    </ol>
</template>

<script lang="ts" src="./breadcrumbs.ts"></script>
<style lang="scss" src="./breadcrumbs.scss"></style>