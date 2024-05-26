<script lang="ts" setup>
import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'

defineProps<{
  links: {
    title: string
    to: string
  }[]
  minimal?: boolean
}>()
</script>

<template>
  <!-- <nav
    v-if="minimal"
    class="flex justify-end w-[12rem]"
  >
    <SCNavigationMenu>
      <SCNavigationMenuList>
        <SCNavigationMenuItem>
          <SCNavigationMenuTrigger>
            Menu
          </SCNavigationMenuTrigger>
          <SCNavigationMenuContent>
            <ul class="gap-3 grid md:grid-cols-1 p-4 w-[8rem] md:w-[10rem] lg:w-[12rem]">
              <AppListItem
                v-for="link in links"
                :key="link.title"
                :title="link.title"
                :to="link.to"
                :class="navigationMenuTriggerStyle()"
              />
              <SCSelectSeparator />
              <AppListItem
                title="Admin"
                to="/admin"
                :class="navigationMenuTriggerStyle()"
              />
            </ul>
          </SCNavigationMenuContent>
        </SCNavigationMenuItem>
      </SCNavigationMenuList>
    </SCNavigationMenu>
  </nav> -->
  <nav
    class="flex flex-col justify-between p-2"
  >
    <div>
      <AppLogo />
      <SCSeparator />
      <div class="flex flex-col">
        <AppListItem
          v-for="link in links"
          :key="link.title"
          :to="link.to"
          :title="link.title"
          :class="navigationMenuTriggerStyle()"
        />
      </div>
      <SCSeparator />
      <AppListItem
        title="Admin"
        to="/admin"
        :class="navigationMenuTriggerStyle()"
      />
    </div>
    <div class="flex flex-col gap-2 w-full">
      <SCSeparator />
      <AppColorMode />
    </div>
  </nav>
</template>
