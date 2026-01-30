import React from 'react';
import { Input, Button } from 'antd';
import { 
  SearchOutlined, 
  BellOutlined, 
  UserOutlined, 
  BookOutlined, 
  HomeOutlined, 
  PlayCircleOutlined, 
  RobotOutlined, 
  SettingOutlined 
} from '@ant-design/icons';

import styles from './index.less';

const LearningPlatformDashboard = () => {
  const courses = [
    {
      id: 1,
      image: 'https://www.weavefox.cn/api/bec53207-989f-461e-9398-8e2a310e5591',
      title: 'YonSuite销售与售前学习..',
      description: '基干YonSuite销售售前角色。按照学习习惯整理3个学习分类：YonSuite打单利器、YonSuite...',
      tag: 'GO>'
    },
    {
      id: 2,
      image: 'https://www.weavefox.cn/api/5c5e4f0a-7d8f-461e-9398-8e2a310e5591',
      title: '摩天伙伴赋能运营官资格...',
      description: '面向摩天伙伴的管理员资格考试',
      tag: 'GO>'
    },
    {
      id: 3,
      image: 'https://www.weavefox.cn/api/7e8f4f0a-7d8f-461e-9398-8e2a310e5591',
      title: 'Global Channel',
      description: 'On-boarding Training',
      tag: 'GO>'
    }
  ];

  const liveList = [
    {
      id: 1,
      date: '01月19日 星期一',
      image: 'https://www.weavefox.cn/api/a1b2c3d4-e5f6-7890-1234-567890abcdef',
      title: '最新一代用友废纲智能判级产品技术分享（产品核武：工...',
      time: '01月19日 17:00直播',
      status: '已结束'
    },
    {
      id: 2,
      date: '01月22日 星期四',
      image: 'https://www.weavefox.cn/api/b2c3d4e5-f6a7-8901-2345-678901abcdef',
      title: '电子会计档案业务解决方案及POC培训',
      time: '01月22日 15:00直播',
      status: '回看'
    },
    {
      id: 3,
      date: '01月22日 星期四',
      image: 'https://www.weavefox.cn/api/c3d4e5f6-a7b8-9012-3456-789012abcdef',
      title: '95%以上准确率的龙腾特钢废钢智能判级案例分享（实战...',
      time: '01月22日 17:00直播',
      status: '已结束'
    },
    {
      id: 4,
      date: '01月29日 星期四',
      image: 'https://www.weavefox.cn/api/d4e5f6a7-b8c9-0123-4567-890123abcdef',
      title: '2026年销售如何做好节日问候?',
      time: '01月29日 08:30直播',
      status: '已结束'
    }
  ];

  return (
    <div className={styles.wrapper}>
      {/* 顶部导航栏 */}
      <div className={styles.headerContainer}>
        <div className={styles.logoContainer}>
          <div className={styles.logoIcon}></div>
          <span className={styles.logoText}>摩天</span>
        </div>
        <div className={styles.navMenu}>
          <span className={styles.navItemActive}>
            <HomeOutlined className={styles.navIcon} />
            首页
          </span>
          <span className={styles.navItem}>
            <PlayCircleOutlined className={styles.navIcon} />
            直播
          </span>
          <span className={styles.navItem}>
            <BookOutlined className={styles.navIcon} />
            公开课
          </span>
          <span className={styles.navItem}>
            <SettingOutlined className={styles.navIcon} />
            职业认证
          </span>
          <span className={styles.navItem}>
            <RobotOutlined className={styles.navIcon} />
            MOT AI
          </span>
        </div>
        <div className={styles.searchContainer}>
          <Input 
            placeholder="搜索" 
            prefix={<SearchOutlined />} 
            className={styles.searchInput} 
          />
        </div>
        <div className={styles.headerIcons}>
          <BookOutlined className={styles.iconItem} />
          <BellOutlined className={styles.iconItem} />
          <div className={styles.userAvatar}>
            <UserOutlined className={styles.userIcon} />
          </div>
        </div>
      </div>

      {/* 主要内容区域 */}
      <div className={styles.mainContent}>
        {/* Banner区域 */}
        <div className={styles.bannerContainer}>
          <div className={styles.bannerLeft}>
            <div className={styles.bannerContent}>
              <div className={styles.bannerTitle}>首期内容 精彩回放</div>
              <div className={styles.bannerSubtitle}>新人入职第一</div>
              <div className={styles.bannerDescription}>点亮龙蛋开启学习成长之旅</div>
            </div>
            <div className={styles.qrCodeContainer}>
              <div className={styles.qrCode}></div>
              <div className={styles.qrCodeText}>微信扫码加入</div>
            </div>
          </div>
          <div className={styles.bannerRight}>
            <div className={styles.bannerRightContent}>
              <div className={styles.bannerMainTitle}>新人入职第一</div>
              <div className={styles.bannerMainSubtitle}>点亮龙蛋开启学习成长之旅</div>
              <div className={styles.bannerPointer}></div>
            </div>
          </div>
        </div>

        {/* 推荐课程 */}
        <div className={styles.recommendedCourses}>
          <h2 className={styles.sectionTitle}>推荐课程</h2>
          <div className={styles.courseList}>
            {courses.map((course) => (
              <div key={course.id} className={styles.courseCard}>
                <div className={styles.courseImageContainer}>
                  <img
                    alt={course.title}
                    src={course.image}
                    className={styles.courseImage}
                  />
                </div>
                <div className={styles.courseContent}>
                  <h3 className={styles.courseTitle}>{course.title}</h3>
                  <p className={styles.courseDescription}>{course.description}</p>
                  <Button className={styles.courseButton}>{course.tag}</Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 热门直播 */}
        <div className={styles.hotLiveSection}>
          <h2 className={styles.sectionTitle}>热门直播</h2>
          <div className={styles.liveTimeline}>
            {liveList.map((live, index) => (
              <div key={live.id} className={styles.timelineItem}>
                <div className={styles.timelineDate}>{live.date}</div>
                <div className={`${styles.timelineDot} ${index === 0 ? styles.activeDot : ''}`}></div>
                {index < liveList.length - 1 && <div className={styles.timelineLine}></div>}
              </div>
            ))}
          </div>
          <div className={styles.liveList}>
            {liveList.map((live) => (
              <div key={live.id} className={styles.liveCard}>
                <div className={styles.liveImageContainer}>
                  <img
                    alt={live.title}
                    src={live.image}
                    className={styles.liveImage}
                  />
                  <div className={styles.liveTag}>直播特训营</div>
                  <div className={`${styles.liveStatus} ${live.status === '回看' ? styles.replayStatus : ''}`}>
                    {live.status}
                  </div>
                </div>
                <div className={styles.liveContent}>
                  <h3 className={styles.liveTitle}>{live.title}</h3>
                  <div className={styles.liveInfo}>
                    <span className={styles.liveTime}>{live.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 右侧悬浮工具栏 */}
      <div className={styles.floatingToolbar}>
        <div className={styles.toolbarItem}>
          <SettingOutlined className={styles.toolbarIcon} />
          <span className={styles.toolbarText}>工作台</span>
        </div>
        <div className={styles.toolbarItemAI}>
          <RobotOutlined className={styles.toolbarIcon} />
          <span className={styles.toolbarText}>MOT AI</span>
        </div>
      </div>
    </div>
  );
};

export default LearningPlatformDashboard;