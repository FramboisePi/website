---
title: Adding Repositories
lang: en-US
---

# External Source Repositories
## What is an External Repository?

**Paperback** out of the box only comes with **SafeDex** as a source for manga. The app however has support for adding sources from external repositories which are not on the official listings. Beta Sources, 18+ Sources, and sources developed independently are separated due to **Paperback** having to adhere to Apple policies in order to be distributed through TestFlight and the Apple App Store. 

## Adding an External Repository
1. Visit [Known Repositories](#known-repositories) on your Device's web browser.
1. Add a Source Repository by tapping "**Add to Paperback**".

## Installing a Source from a repository
1. Follow [Adding an External Repository](#adding-an-external-repository) to add a source repository to Paperback.
1. Navigate to the **Settings** tab then tap **Sources** menu item.
1. Tap on the previously added repository under the "Repositories" section.
1. Choose a source to install.

## Known Repositories
This is a list of all of the known repositories currently for Paperback, as well as the repository contents.

<div>
    <ExtensionsList
        url="https://paperback-ios.github.io/extensions-beta"
        name="Primary Sources"
        description="Officially maintained repository, contains a few major sources suited for most users" />
    <ExtensionsList 
        url="https://paperback-ios.github.io/h-extensions"
        name="H-Extensions"
        description="Official repository for 18+ sources. These also include redirector versions of the source, which allow you to view content even if it is blocked in your country, without a VPN" />
    <ExtensionsList 
        url="https://pogogo007.github.io/extensions-beta"
        name="MangaDex Unlocked"
        description="This source overwrites MangaDex and unlocks the full contents of the website. No content is filtered. May load faster" />
</div>

::: guide Tags
Our tag system allows you to get additional information on a source. Hover its name in the previous lists to see them.  

* <el-tag type="success" size="mini" effect="dark"> Notifications </el-tag> The source implement a notification system. Check <a href="/help/faq/#how-do-notifications-work">our faq entry</a> for more information
* <el-tag type="danger" size="mini" effect="dark"> Cloudflare </el-tag> Protection by Cloudflare requires you to do <a href="/help/faq/#bypass-cloudflare-protection">bypass CloudFlare</a> process
* <el-tag type="danger" size="mini" effect="dark"> Self Hosted </el-tag> These sources allow and require you to use your own manga server
:::