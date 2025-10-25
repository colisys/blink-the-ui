<script setup lang="ts">
import {
  BlinkButton as Button,
  BlinkSwitch as Switch,
  BlinkText as Text,
  BlinkLabel,
  BlinkAlert,
  BlinkInput,
  BlinkProgress,
  GlobalVisual,
  BlinkCheckbox,
} from '@blink-the-ui/components';

import {
  BlinkAnimFade,
  BlinkAnimRipple,
  BlinkAnimStacked,
} from '@blink-the-ui/animations';

import {
  BlinkGroup as Group,
  BlinkStacked as Stacked,
} from '@blink-the-ui/layout';
import {
  BlinkOverlay,
  BlinkOverlayDialog,
  createOverlay,
} from '@blink-the-ui/overlays';

import { ref } from 'vue';
import { h } from 'vue';
import { BlinkProgressController } from '@blink-the-ui/components/src/progress';

const times = ref(0);

const checked = ref(true);
const handleSwitchChange = (value: boolean) => {
  checked.value = value;
};

const alerts = ref([
  { type: 'primary', message: 'This is a primary alert', index: times.value++ },
]);
const handleAddAlert = () => {
  alerts.value.push({
    type: 'primary',
    message: 'This is a primary alert',
    index: times.value++,
  });
};

const handleRemove = (index: number) => {
  alerts.value.splice(index, 1);
};

// 创建带有自定义slots的overlay示例
const createCustomOverlay = () => {
  createOverlay({
    slot: {
      header: () =>
        h(
          'div',
          { style: 'background: #409eff; color: white; padding: 10px;' },
          'Custom Header'
        ),
      title: () => h('div', { style: 'font-weight: bold;' }, 'Custom Title'),
      default: () =>
        h('div', {}, [
          h('p', 'This is custom content'),
          h('p', 'You can put any content here'),
        ]),
      footer: () =>
        h(
          'div',
          { style: 'text-align: right; padding: 10px;' },
          'Custom Footer'
        ),
    },
    listener: {
      onClose(_id) {
        console.log('onClose', _id);
      },
    },
  });
};

// 创建多个overlay的示例
const createMultipleOverlays = () => {
  // 创建第一个overlay
  createOverlay({
    pos_size: { left: 100, top: 100 },
    slot: {
      title: () => h('div', {}, 'First Overlay'),
      default: () =>
        h(
          'div',
          {},
          'This is the first overlay. Click on any overlay to bring it to front.'
        ),
    },
  });

  // 创建第二个overlay
  createOverlay({
    pos_size: { left: 150, top: 150 },
    slot: {
      title: () => h('div', {}, 'Second Overlay'),
      default: () =>
        h(
          'div',
          {},
          'This is the second overlay. Try clicking on different overlays.'
        ),
    },
  });

  // 创建第三个overlay
  createOverlay({
    pos_size: { left: 200, top: 200 },
    slot: {
      title: () => h('div', {}, 'Third Overlay'),
      default: () =>
        h(
          'div',
          {},
          'This is the third overlay. The last clicked overlay should always be on top.'
        ),
    },
  });
};

let index = 0;
const handleUpdateProgress = (controller: BlinkProgressController) => {
  setTimeout(() => {
    controller.update(index++);
    if (index <= 100) {
      handleUpdateProgress(controller);
    } else {
      controller.update(0);
    }
  }, 100);
};
</script>

<template>
  <div id="app">
    <h1>Blink UI Playground</h1>

    <Group direction="vertical" alignment="center" gap="8px">
      <Stacked direction="horizontal" gap="8px" overlap="100px">
        <Button>Default Button</Button>
        <Button visual="primary" focus-shadow>Primary Button</Button>
        <Button visual="danger">Danger Button</Button>
        <Button visual="warning">Warning Button</Button>
        <Button visual="success">Success Button</Button>
      </Stacked>

      <Group justify="center" fill>
        <Button disabled>Default Button</Button>
        <Button visual="primary" disabled>Primary Button</Button>
        <Button visual="danger" disabled>Danger Button</Button>
        <Button visual="warning" disabled>Warning Button</Button>
        <Button visual="success" disabled>Success Button</Button>
      </Group>

      <Group justify="center" fill>
        <Button outline="solid" v-blink-ripple>Default Button</Button>
        <Button outline="solid" visual="primary" v-blink-ripple
          >Primary Button</Button
        >
        <Button outline="solid" visual="danger" v-blink-ripple
          >Danger Button</Button
        >
        <Button outline="solid" visual="warning" v-blink-ripple
          >Warning Button</Button
        >
        <Button outline="solid" visual="success" v-blink-ripple
          >Success Button</Button
        >
      </Group>

      <Group justify="around" fill>
        <Text>Normal Text</Text>
        <Text type="disabled">Disabled Text</Text>
        <Text type="link">Link Text</Text>
      </Group>

      <Group justify="around" fill wrap>
        <BlinkLabel>Simple Label</BlinkLabel>
        <BlinkLabel type="disabled">Disabled Label</BlinkLabel>
      </Group>

      <Group justify="center" fill>
        <Switch @change="handleSwitchChange">
          <template #prefix>
            <BlinkLabel>Switch</BlinkLabel>
          </template>
        </Switch>
        <Switch :checked="checked">
          <template #prefix>
            <BlinkLabel>Checked Switch</BlinkLabel>
          </template>
        </Switch>
        <Switch triggering="contextmenu">
          <template #prefix>
            <BlinkLabel>Contextmenu Switch</BlinkLabel>
          </template>
        </Switch>
        <Switch triggering="dblclick">
          <template #prefix>
            <BlinkLabel>Dblclick Switch</BlinkLabel>
          </template>
        </Switch>
      </Group>

      <Group direction="vertical" alignment="stretch" fill>
        <BlinkAlert
          v-for="alert in alerts"
          :key="alert.message"
          :visual="alert.type as GlobalVisual"
          closable
        >
          <template #prefix>
            <BlinkLabel>{{ alert.type }}</BlinkLabel>
          </template>
          <Text>{{ alert.message }}</Text>
        </BlinkAlert>

        <Group> <Button @click="handleAddAlert">&plus;</Button> </Group>
      </Group>

      <Group justify="center" fill>
        <BlinkAnimStacked>
          <Group v-for="(alert, index) in alerts" :key="alert.index">
            <div>
              <span>{{ `${alert.index}: ${alert.message}` }}</span>
              <span @click="handleRemove(index)">&times;</span>
            </div>
          </Group>
        </BlinkAnimStacked>
      </Group>

      <Group fill>
        <BlinkInput name="username" value="123123"></BlinkInput>
        <BlinkInput name="password" password value="123123"></BlinkInput>
      </Group>

      <!-- 添加创建多个overlay的按钮 -->
      <Group justify="center" fill>
        <Button @click="createCustomOverlay">Create Custom Overlay</Button>
        <Button @click="createMultipleOverlays"
          >Create Multiple Overlays</Button
        >
      </Group>

      <!-- <Group justify="center" fill>
        <Group direction="vertical">
          <BlinkProgress color="primary"></BlinkProgress>
          <BlinkProgress color="primary" infinite></BlinkProgress>
          <BlinkProgress color="primary" animated></BlinkProgress>
          <BlinkProgress color="primary" animated striped></BlinkProgress>
        </Group>
        <Group direction="vertical">
          <BlinkProgress color="success"></BlinkProgress>
          <BlinkProgress color="success" infinite></BlinkProgress>
          <BlinkProgress color="success" animated></BlinkProgress>
          <BlinkProgress color="success" animated striped></BlinkProgress>
        </Group>
        <Group direction="vertical">
          <BlinkProgress color="danger"></BlinkProgress>
          <BlinkProgress color="danger" infinite></BlinkProgress>
          <BlinkProgress color="danger" animated></BlinkProgress>
          <BlinkProgress color="danger" animated striped></BlinkProgress>
        </Group>
      </Group> -->

      <BlinkProgress
        color="primary"
        :updater="handleUpdateProgress"
      ></BlinkProgress>

      <Group justify="center" fill>
        <BlinkCheckbox></BlinkCheckbox>
        <BlinkCheckIcon></BlinkCheckIcon>
        <BlinkTestIcon></BlinkTestIcon>
      </Group>
    </Group>

    <div v-blink-datetime>2025/10/19 00:00:00</div>

    <BlinkOverlay>
      <template #title>This is an title</template>
      Hello World
      <template #footer-buttons>
        <Button>Cancel</Button>
        <Button visual="primary">Confirm</Button>
      </template>
    </BlinkOverlay>

    <BlinkOverlayDialog
      title="This is an title"
      content="Please Input"
      type="input"
      @confirm="(val: string) => console.log(val)"
    />

    <BlinkOverlayDialog
      title="This is an title"
      content="Please Input"
      type="password"
      @confirm="(val: string) => console.log(val)"
    />
  </div>
</template>

<style>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.button-group {
  margin: 10px 0;
}

.button-group > * {
  margin: 0 5px;
}
</style>
