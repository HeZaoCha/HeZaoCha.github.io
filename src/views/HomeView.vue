<template>
  <div class="home-view" data-aos="fade-up">
    <el-row class="header-section" justify="center">
      <el-col :span="12" class="profile-card">
        <el-avatar :size="120" src="/src/assets/avatar.png" />
        <h1 class="name">何糟糕</h1>
        <p class="title">全栈开发工程师</p>
        <el-button type="primary" icon="Message" round>联系我</el-button>
      </el-col>
    </el-row>

    <el-timeline class="timeline-section" data-aos="fade-right">
      <el-timeline-item
        v-for="(item, index) in timelineData"
        :key="index"
        :timestamp="item.time"
        placement="top"
      >
        <el-card>
          <h4>{{ item.title }}</h4>
          <p>{{ item.content }}</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>

    <el-row class="skill-section" data-aos="fade-left">
      <el-col 
        v-for="(skill, index) in skills"
        :key="index"
        :span="6"
        class="skill-card"
      >
        <el-card shadow="hover">
          <el-icon :size="40" class="skill-icon">
            <component :is="skill.icon" />
          </el-icon>
          <h3>{{ skill.name }}</h3>
          <el-progress :percentage="skill.level" />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Connection, MagicStick } from '@element-plus/icons-vue'

const timelineData = ref([
  {
    time: '2020-2023',
    title: 'XX科技有限公司',
    content: '负责前端架构设计和核心模块开发'
  },
  // 更多时间轴数据...
])

const skills = ref([
  { name: 'Vue3', icon: MagicStick, level: 90 },
  { name: 'Node.js', icon: Connection, level: 85 },
  // 更多技能数据...
])
</script>

<style scoped lang="scss">
.home-view {
  padding: 40px 10%;
  
  .header-section {
    margin-bottom: 60px;
    .profile-card {
      text-align: center;
      .name {
        margin: 20px 0 10px;
        font-size: 2.5em;
      }
      .title {
        color: #666;
        margin-bottom: 20px;
      }
    }
  }

  .timeline-section {
    margin: 40px 0;
  }

  .skill-section {
    margin-top: 40px;
    .skill-card {
      padding: 15px;
      .skill-icon {
        margin-bottom: 15px;
        color: #409eff;
      }
    }
  }
}
</style>