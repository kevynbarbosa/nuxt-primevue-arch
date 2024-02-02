<template>
  <div class="grid">
    <div class="col-12">
      <Card>
        <template #title>Main Buttons</template>
        <template #content>
          <div class="flex justify-content-center flex-wrap gap-2">
            <Button label="Primary" />
            <Button label="Secondary" severity="secondary" />
            <Button label="Success" severity="success" />
            <Button label="Info" severity="info" />
            <Button label="Warning" severity="warning" />
            <Button label="Help" severity="help" />
            <Button label="Danger" severity="danger" />
            <Button label="Contrast" severity="contrast" />
          </div>
        </template>
      </Card>
    </div>
  </div>

  <div class="grid">
    <div class="col-6">
      <Card>
        <template #title>Outline Buttons</template>
        <template #content>
          <div class="flex justify-content-center flex-wrap gap-2">
            <Button label="Primary" outlined />
            <Button label="Secondary" severity="secondary" outlined />
            <Button label="Success" severity="success" outlined />
            <Button label="Info" severity="info" outlined />
            <Button label="Warning" severity="warning" outlined />
            <Button label="Help" severity="help" outlined />
            <Button label="Danger" severity="danger" outlined />
            <Button label="Contrast" severity="contrast" outlined />
          </div>
        </template>
      </Card>
    </div>
    <div class="col-6">
      <Card>
        <template #title>Rounded Buttons</template>
        <template #content>
          <div class="flex justify-content-center flex-wrap gap-2">
            <Button label="Primary" rounded />
            <Button label="Secondary" severity="secondary" rounded />
            <Button label="Success" severity="success" rounded />
            <Button label="Info" severity="info" rounded />
            <Button label="Warning" severity="warning" rounded />
            <Button label="Help" severity="help" rounded />
            <Button label="Danger" severity="danger" rounded />
            <Button label="Contrast" severity="contrast" rounded />
          </div>
        </template>
      </Card>
    </div>
  </div>

  <div class="grid">
    <div class="col-3">
      <Card>
        <template #title>Icon buttons with text</template>
        <template #content>
          <div class="flex justify-content-center flex-wrap gap-2">
            <Button label="Wishlist" severity="info" icon="pi pi-heart-fill" />
            <Button label="Favorite" severity="warning" icon="pi pi-star-fill" rounded />
          </div>
        </template>
      </Card>
    </div>
    <div class="col-3">
      <Card>
        <template #title>Icon buttons with border</template>
        <template #content>
          <div class="flex justify-content-center flex-wrap gap-2">
            <Button class="border-2" severity="info">
              <i class="pi pi-heart-fill mr-2"></i>
              <div class="h-full border-left-1 mr-2"></div>
              <span class="font-bold">Wishlist</span>
            </Button>

            <Button class="border-2" severity="warning" rounded>
              <i class="pi pi-star-fill mr-2"></i>
              <div class="h-full border-left-1 mr-2"></div>
              <span class="font-bold">Favorite</span>
            </Button>
          </div>
        </template>
      </Card>
    </div>
    <div class="col-3">
      <Card>
        <template #title>Icon buttons</template>
        <template #content>
          <div class="flex justify-content-center flex-wrap gap-2">
            <Button icon="pi pi-whatsapp" severity="secondary" />
            <Button icon="pi pi-trash" severity="success" />
            <Button icon="pi pi-home" severity="danger" rounded />
            <Button icon="pi pi-tag" severity="primary" rounded />
          </div>
        </template>
      </Card>
    </div>
    <div class="col-3">
      <Card>
        <template #title>Toggle state</template>
        <template #content>
          <div class="flex justify-content-center flex-wrap gap-2">
            <ToggleButton v-model="toggleButton1" onLabel="On" offLabel="Off" />
            <ToggleButton
              v-model="toggleButton2"
              onLabel="Locked"
              offLabel="Unlocked"
              onIcon="pi pi-lock"
              offIcon="pi pi-lock-open"
              class="w-9rem"
              aria-label="Do you confirm"
            />
          </div>
        </template>
      </Card>
    </div>
  </div>

  <div class="grid">
    <div class="col-12">
      <Card>
        <template #title>Disabled buttons</template>
        <template #content>
          <div class="flex justify-content-center flex-wrap gap-2">
            <Button label="Primary" disabled />
            <Button label="Secondary" severity="secondary" disabled />
            <Button label="Success" severity="success" disabled />
            <Button label="Info" severity="info" disabled />
            <Button label="Warning" severity="warning" disabled />
            <Button label="Help" severity="help" disabled />
            <Button label="Danger" severity="danger" disabled />
            <Button label="Contrast" severity="contrast" disabled />
          </div>

          <div class="mt-2 flex justify-content-center flex-wrap gap-2">
            <Button label="Primary" outlined disabled />
            <Button label="Secondary" severity="secondary" outlined disabled />
            <Button label="Success" severity="success" outlined disabled />
            <Button label="Info" severity="info" outlined disabled />
            <Button label="Warning" severity="warning" outlined disabled />
            <Button label="Help" severity="help" outlined disabled />
            <Button label="Danger" severity="danger" outlined disabled />
            <Button label="Contrast" severity="contrast" outlined disabled />
          </div>
        </template>
      </Card>
    </div>
  </div>

  <div class="grid">
    <div class="col-6">
      <Card>
        <template #title>Block buttons</template>
        <template #content>
          <div class="mt-2 flex justify-content-center flex-wrap gap-2">
            <Button class="w-full" label="Button block" severity="primary" />
            <Button class="w-full" label="Button block" severity="primary" outlined />
            <Button class="w-full" label="Button block" severity="primary" raised outlined />
          </div>
        </template>
      </Card>
    </div>
    <div class="col-6">
      <Card>
        <template #title>Raised text</template>
        <template #content>
          <div class="mt-2 flex justify-content-center flex-wrap gap-2">
            <Button label="Primary" text raised />
            <Button label="Secondary" severity="secondary" text raised />
            <Button label="Success" severity="success" text raised />
            <Button label="Info" severity="info" text raised />
            <Button label="Warning" severity="warning" text raised />
            <Button label="Help" severity="help" text raised />
            <Button label="Danger" severity="danger" text raised />
            <Button label="Plain" plain text raised />
          </div>
        </template>
      </Card>
    </div>
  </div>

  <div class="grid">
    <div class="col-6">
      <Card>
        <template #title>Button sizes</template>
        <template #content>
          <div class="card flex flex-wrap align-items-center justify-content-center gap-3">
            <Button label="Small" icon="pi pi-check" size="small" />
            <Button label="Normal" icon="pi pi-check" />
            <Button label="Large" icon="pi pi-check" size="large" />
          </div>
        </template>
      </Card>
    </div>
  </div>

  <div class="grid">
    <div class="col-4">
      <Card>
        <template #title>Button groups</template>
        <template #content>
          <div class="flex align-items-center justify-content-center">
            <span class="p-buttonset">
              <Button label="Save" icon="pi pi-check" />
              <Button label="Delete" icon="pi pi-trash" />
              <Button label="Cancel" icon="pi pi-times" />
            </span>
          </div>
        </template>
      </Card>
    </div>
    <div class="col-4">
      <Card>
        <template #title>Button groups</template>
        <template #content>
          <div class="flex align-items-center justify-content-center">
            <span class="p-buttonset">
              <Button label="Save" icon="pi pi-check" outlined />
              <Button label="Delete" icon="pi pi-trash" outlined />
              <Button label="Cancel" icon="pi pi-times" outlined />
            </span>
          </div>
        </template>
      </Card>
    </div>
    <div class="col-4">
      <Card>
        <template #title>Button groups</template>
        <template #content>
          <div class="flex align-items-center justify-content-center">
            <span class="p-buttonset">
              <Button label="Save" icon="pi pi-check" rounded />
              <Button label="Delete" icon="pi pi-trash" rounded />
              <Button label="Cancel" icon="pi pi-times" rounded />
            </span>
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>

<script setup>
const toggleButton1 = ref(false);
const toggleButton2 = ref(false);
</script>
