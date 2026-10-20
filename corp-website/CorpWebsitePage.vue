<template>
  <div class="corp-website-page">
    <HeaderJZRC />
    <!-- Hero -->
    <section class="hero">
      <div class="wrap">
        <span class="pill"><span class="dot"></span>12 个行业官网预览，支持按需定制</span>
        <h1>为每个企业，打造<em>专属的数字门面</em></h1>
        <p class="hero-desc">
          从视觉设计、栏目架构到多语言部署，一站式交付高质量的官网方案。
          下方缩略图来自对应行业的真实官网截图，可作为版式与风格参考。
        </p>
        <div class="stats">
          <div class="stat"><b>12</b><span>行业模板</span></div>
          <div class="stat"><b>300+</b><span>交付项目</span></div>
          <div class="stat"><b>7 天</b><span>快速上线</span></div>
          <div class="stat"><b>98%</b><span>客户满意度</span></div>
        </div>
      </div>
    </section>
  
    <!-- Showcase -->
    <section class="showcase">
      <div class="wrap">
        <div class="section-head">
          <div>
            <h2>行业官网示例 <i>· 12 例</i></h2>
            <p>缩略图为真实行业官网截图</p>
          </div>
        </div>
        <div class="grid">
          <!-- 01 制造业 · Siemens https://www.siemens.com/zh-cn/ -->
          <a class="card" style="--bg:#eef3fb;--acc:#1d4ed8">
            <div class="preview">
              <div class="win">
                <div class="bar"><i></i><i></i><i></i></div>
                <img class="shot"
                  src="./image/zzy.png"
                  alt="制造业官网预览"
                  loading="lazy">
              </div>
            </div>
            <div class="card-body">
              <h3>制造业</h3>
              <p>产品体系与工艺优势可视化呈现，多语言站点对接海外客户。</p>
              <div class="tags"><span class="tag">产品展示</span><span class="tag">多语言</span></div>
            </div>
          </a>

          <!-- 02 医疗健康 · Mayo Clinic https://www.mayoclinic.org/ -->
          <a class="card" style="--bg:#e9f9f4;--acc:#0d9488">
            <div class="preview">
              <div class="win">
                <div class="bar"><i></i><i></i><i></i></div>
                <img class="shot"
                  src="./image/yljk.png"
                  alt="医疗健康官网预览"
                  loading="lazy">
              </div>
            </div>
            <div class="card-body">
              <h3>医疗健康</h3>
              <p>科室导航、专家团队与在线预约一体，兼顾合规要求与品牌信任感。</p>
              <div class="tags"><span class="tag">预约挂号</span><span class="tag">品牌信任</span></div>
            </div>
          </a>

          <!-- 03 教育培训 · Coursera https://www.coursera.org -->
          <a class="card" style="--bg:#fff4e8;--acc:#ea580c">
            <div class="preview">
              <div class="win">
                <div class="bar"><i></i><i></i><i></i></div>
                <img class="shot"
                  src="./image/jypx.png"
                  alt="教育培训官网预览"
                  loading="lazy"
                  >
              </div>
            </div>
            <div class="card-body">
              <h3>教育培训</h3>
              <p>课程体系、师资展示与招生入口打通，有效缩短报名转化路径。</p>
              <div class="tags"><span class="tag">招生获客</span><span class="tag">课程展示</span></div>
            </div>
          </a>

          <!-- 04 金融保险 -->
          <a class="card" style="--bg:#e9f7ef;--acc:#047857">
            <div class="preview">
              <div class="win">
                <div class="bar"><i></i><i></i><i></i></div>
                <img class="shot"
                  src="./image/jrbx.png"
                  alt="金融保险官网预览"
                  loading="lazy"
                  >
              </div>
            </div>
            <div class="card-body">
              <h3>金融保险</h3>
              <p>业务介绍与风险披露并重，用克制的视觉语言营造稳健可信形象。</p>
              <div class="tags"><span class="tag">合规展示</span><span class="tag">数据看板</span></div>
            </div>
          </a>

          <!-- 05 房地产 · 万科 www.vanke.com -->
          <a class="card" style="--bg:#fdf6e6;--acc:#b45309">
            <div class="preview">
              <div class="win">
                <div class="bar"><i></i><i></i><i></i></div>
                <img class="shot"
                  src="./image/fdc.png"
                  alt="房地产官网预览"
                  loading="lazy"
                  >
              </div>
            </div>
            <div class="card-body">
              <h3>房地产</h3>
              <p>楼盘项目、实景图集与置业顾问在线咨询，一键触达意向客户。</p>
              <div class="tags"><span class="tag">楼盘展示</span><span class="tag">在线咨询</span></div>
            </div>
          </a>

          <!-- 06 餐饮美食 · McDonald's www.mcdonalds.com -->
          <a class="card" style="--bg:#fdeeee;--acc:#dc2626">
            <div class="preview">
              <div class="win">
                <div class="bar"><i></i><i></i><i></i></div>
                <img class="shot"
                  src="./image/cyms.png"
                  alt="餐饮美食官网预览"
                  loading="lazy"
                  >
              </div>
            </div>
            <div class="card-body">
              <h3>餐饮美食</h3>
              <p>门店导航、菜单展示与外卖平台跳转联动，线上引流直接到店。</p>
              <div class="tags"><span class="tag">门店导流</span><span class="tag">菜单展示</span></div>
            </div>
          </a>

          <!-- 07 科技互联网 · Microsoft www.microsoft.com -->
          <a class="card" style="--bg:#eef0ff;--acc:#4f46e5">
            <div class="preview">
              <div class="win">
                <div class="bar"><i></i><i></i><i></i></div>
                <img class="shot"
                  src="./image/kjflw.png"
                  alt="科技互联网官网预览"
                  loading="lazy"
                  >
              </div>
            </div>
            <div class="card-body">
              <h3>科技互联网</h3>
              <p>产品能力、技术架构与解决方案的专业化表达，塑造技术心智。</p>
              <div class="tags"><span class="tag">SaaS 官网</span><span class="tag">解决方案</span></div>
            </div>
          </a>

          <!-- 08 法律咨询 · 金杜 www.kwm.com -->
          <a class="card" style="--bg:#eef1f6;--acc:#334155">
            <div class="preview">
              <div class="win">
                <div class="bar"><i></i><i></i><i></i></div>
                <img class="shot"
                  src="./image/flzx.png"
                  alt="法律咨询官网预览"
                  loading="lazy"
                  >
              </div>
            </div>
            <div class="card-body">
              <h3>法律咨询</h3>
              <p>专业领域、律师团队与案例解读并重，快速建立权威专业形象。</p>
              <div class="tags"><span class="tag">专业权威</span><span class="tag">案例解读</span></div>
            </div>
          </a>

          <!-- 09 旅游酒店 · Marriott www.marriott.com -->
          <a class="card" style="--bg:#e9f5fe;--acc:#0284c7">
            <div class="preview">
              <div class="win">
                <div class="bar"><i></i><i></i><i></i></div>
                <img class="shot"
                  src="./image/lyjd.png"
                  alt="旅游酒店官网预览"
                  loading="lazy"
                  >
              </div>
            </div>
            <div class="card-body">
              <h3>旅游酒店</h3>
              <p>房型展示、在线预订与目的地内容运营，帮助提升直订比例。</p>
              <div class="tags"><span class="tag">在线预订</span><span class="tag">内容运营</span></div>
            </div>
          </a>

          <!-- 10 汽车服务 · https://vw.faw-vw.com/ -->
          <a class="card" style="--bg:#f0f2f5;--acc:#1f2937">
            <div class="preview">
              <div class="win">
                <div class="bar"><i></i><i></i><i></i></div>
                <img class="shot"
                  src="./image/qcfw.png"
                  alt="汽车服务官网预览"
                  loading="lazy"
                  >
              </div>
            </div>
            <div class="card-body">
              <h3>汽车服务</h3>
              <p>车型展示、门店预约与售后保养服务入口清晰直达，减少跳失。</p>
              <div class="tags"><span class="tag">预约服务</span><span class="tag">门店管理</span></div>
            </div>
          </a>

          <!-- 11 文化传媒 · https://news.163.com/ -->
          <a class="card" style="--bg:#f3eeff;--acc:#7c3aed">
            <div class="preview">
              <div class="win">
                <div class="bar"><i></i><i></i><i></i></div>
                <img class="shot"
                  src="./image/whcm.png"
                  alt="文化传媒官网预览"
                  loading="lazy"
                  >
              </div>
            </div>
            <div class="card-body">
              <h3>文化传媒</h3>
              <p>作品集、项目案例与内容专栏灵活编排，充分释放创意调性。</p>
              <div class="tags"><span class="tag">作品集</span><span class="tag">内容专栏</span></div>
            </div>
          </a>
          
          <!-- 12 跨境电商 · Amazon www.amazon.com -->
          <a class="card" style="--bg:#fdecf4;--acc:#db2777">
            <div class="preview">
              <div class="win">
                <div class="bar"><i></i><i></i><i></i></div>
                <img class="shot"
                  src="./image/kjds.png"
                  alt="跨境电商官网预览"
                  loading="lazy"
                  >
              </div>
            </div>
            <div class="card-body">
              <h3>跨境电商</h3>
              <p>商品聚合、多币种多语言与全球访问加速，助力品牌出海获客。</p>
              <div class="tags"><span class="tag">全球部署</span><span class="tag">多币种</span></div>
            </div>
          </a>
        </div>
      </div>
    </section>
  
    <!-- CTA -->
    <section class="cta" id="cta">
      <div class="cta-inner">
        <div class="cta-text">
          <h2>没找到你的行业？</h2>
          <p>我们已服务 30+ 行业，可按需定制栏目结构、视觉风格、多语言版本与后台管理系统。提交需求，48 小时内出方案与报价。</p>
        </div>
        <div class="cta-actions">
          <a href="/contact" class="btn btn-white">方案沟通</a>
          <!-- <a href="#" class="btn btn-ghost">查看全部案例</a> -->
        </div>
      </div>
    </section>

    <FooterJZRC />
  </div>
</template>

<script setup lang="ts">
import FooterJZRC from '../components/FooterJZRC.vue';
import HeaderJZRC from '../components/HeaderJZRC.vue';
</script>

<style scoped>
  *,*::before,*::after{box-sizing:border-box;}

  .corp-website-page{
    --ink:#0f172a;
    --ink2:#5a6580;
    --ink3:#8e99b0;
    --line:#e7eaf3;
    --brand:#4f46e5;

    margin:0;
    font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","PingFang SC","Hiragino Sans GB","Microsoft YaHei",sans-serif;
    color:var(--ink);
    background:
      radial-gradient(900px 520px at 10% -10%, rgba(99,102,241,.14), transparent 62%),
      radial-gradient(760px 460px at 90% -6%, rgba(34,211,238,.13), transparent 60%),
      #f7f8fc;
    -webkit-font-smoothing:antialiased;
  }

  html{scroll-behavior:smooth;}

  .wrap{max-width:1220px;margin:0 auto;padding:0 24px;}

  /* ---------- Header ---------- */
  .header{
    position:sticky;top:0;z-index:50;
    background:rgba(255,255,255,.78);
    backdrop-filter:saturate(180%) blur(14px);
    -webkit-backdrop-filter:saturate(180%) blur(14px);
    border-bottom:1px solid var(--line);
  }
  .header .wrap{height:66px;display:flex;align-items:center;justify-content:space-between;gap:24px;}

  .brand{display:flex;align-items:center;gap:10px;text-decoration:none;color:var(--ink);font-weight:700;font-size:16px;letter-spacing:.3px;}
  .brand .mark{
    width:32px;height:32px;border-radius:10px;
    background:linear-gradient(135deg,#6366f1,#22d3ee);
    box-shadow:0 8px 18px -8px rgba(79,70,229,.9);
    display:grid;place-items:center;color:#fff;font-size:15px;font-weight:800;
  }

  .nav{display:flex;align-items:center;gap:30px;}
  .nav a{position:relative;font-size:14px;color:var(--ink2);text-decoration:none;transition:color .2s;}
  .nav a:hover{color:var(--ink);}
  .nav a.active{color:var(--brand);font-weight:600;}
  .nav a.active::after{
    content:"";position:absolute;left:50%;bottom:-22px;transform:translateX(-50%);
    width:16px;height:2px;border-radius:2px;background:var(--brand);
  }

  .btn{
    display:inline-flex;align-items:center;justify-content:center;gap:8px;
    border:none;cursor:pointer;text-decoration:none;
    font-size:14px;font-weight:600;border-radius:11px;
    transition:transform .25s, box-shadow .25s, background .25s;
    font-family:inherit;
  }
  .btn-primary{
    padding:10px 20px;color:#fff;
    background:linear-gradient(135deg,#4f46e5,#7c6cf6);
    box-shadow:0 12px 24px -12px rgba(79,70,229,.95);
  }
  .btn-primary:hover{transform:translateY(-2px);box-shadow:0 16px 30px -12px rgba(79,70,229,1);}

  /* ---------- Hero ---------- */
  .hero{padding:120px 0 54px;text-align:center;}

  .pill{
    display:inline-flex;align-items:center;gap:8px;
    padding:7px 15px;border-radius:999px;
    background:#fff;border:1px solid var(--line);
    font-size:13px;color:var(--ink2);
    box-shadow:0 8px 20px -16px rgba(15,23,42,.55);
  }
  .pill .dot{width:6px;height:6px;border-radius:50%;background:#22c55e;box-shadow:0 0 0 4px rgba(34,197,94,.16);}

  .hero h1{
    margin:22px 0 0;
    font-size:clamp(30px,4.2vw,50px);
    line-height:1.22;letter-spacing:-.8px;font-weight:800;
  }
  .hero h1 em{
    font-style:normal;
    background:linear-gradient(115deg,#4f46e5 10%,#22d3ee 90%);
    -webkit-background-clip:text;background-clip:text;color:transparent;
  }

  .hero-desc{
    max-width:640px;margin:20px auto 0;
    font-size:16px;line-height:1.8;color:var(--ink2);
  }

  .stats{display:flex;justify-content:center;flex-wrap:wrap;gap:14px 56px;margin-top:42px;}
  .stat{text-align:center;}
  .stat b{display:block;font-size:27px;letter-spacing:-.6px;font-weight:800;
    background:linear-gradient(120deg,#1e1b4b,#4f46e5);-webkit-background-clip:text;background-clip:text;color:transparent;}
  .stat span{font-size:13px;color:var(--ink2);}

  /* ---------- Showcase ---------- */
  .showcase{padding-bottom:94px;}

  .section-head{
    display:flex;align-items:flex-end;justify-content:space-between;
    gap:20px;flex-wrap:wrap;margin-bottom:26px;
  }
  .section-head h2{margin:0;font-size:22px;letter-spacing:-.3px;font-weight:700;}
  .section-head h2 i{font-style:normal;color:var(--brand);}
  .section-head p{margin:8px 0 0;font-size:14px;color:var(--ink2);}

  .grid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;}

  /* ---------- Card ---------- */
  .card{
    display:flex;flex-direction:column;
    text-decoration:none;color:inherit;
    background:#fff;border:1px solid var(--line);border-radius:16px;
    overflow:hidden;
    transition:transform .3s cubic-bezier(.2,.8,.2,1), box-shadow .3s, border-color .3s;
  }
  .card:hover{
    transform:translateY(-7px);
    border-color:#d8ddee;
    box-shadow:0 22px 44px -18px rgba(15,23,42,.28);
  }

  /* ---- 真实官网截图预览 ---- */
  .preview{
    padding:15px;
    background:linear-gradient(165deg, var(--bg) 0%, #ffffff 92%);
    border-bottom:1px solid var(--line);
  }

  .win{
    height:138px;
    background:#fff;border-radius:10px;overflow:hidden;
    box-shadow:0 8px 20px -12px rgba(15,23,42,.4), 0 0 0 1px rgba(15,23,42,.04);
    display:flex;flex-direction:column;
    transition:transform .35s cubic-bezier(.2,.8,.2,1);
  }
  .card:hover .win{transform:translateY(-3px) scale(1.025);}

  .bar{
    height:15px;flex:none;
    background:#f2f4fa;
    display:flex;align-items:center;gap:4px;padding:0 8px;
    border-bottom:1px solid #eef1f8;
  }
  .bar i{width:4px;height:4px;border-radius:50%;background:#ccd3e3;}

  .shot{
    display:block;
    width:100%;
    flex:1;
    min-height:0;
    object-fit:cover;
    object-position:top center;
    background:#eef1f8;
    transition:transform .35s cubic-bezier(.2,.8,.2,1);
  }
  .card:hover .shot{transform:scale(1.02);}

  /* ---- card body ---- */
  .card-body{padding:15px 16px 17px;display:flex;flex-direction:column;gap:7px;flex:1;}

  .card-body h3{
    margin:0;font-size:15px;font-weight:700;letter-spacing:.2px;
    display:flex;align-items:center;justify-content:space-between;gap:10px;
  }
  .card-body h3::after{
    content:"";flex:none;width:6px;height:6px;
    border-top:2px solid #c9cfdf;border-right:2px solid #c9cfdf;border-radius:1px;
    transform:rotate(45deg);
    transition:transform .25s, border-color .25s;
  }
  .card:hover h3::after{border-color:var(--acc);transform:translate(2px,-2px) rotate(45deg);}

  .card-body p{margin:0;font-size:12.5px;line-height:1.65;color:var(--ink2);}

  .tags{display:flex;flex-wrap:wrap;gap:6px;margin-top:auto;padding-top:10px;}
  .tag{
    font-size:11px;font-weight:500;line-height:1;
    padding:5px 9px;border-radius:999px;
    color:var(--acc);background:var(--bg);
  }

  /* ---------- CTA ---------- */
  .cta{padding:0 24px 90px;max-width:1268px;margin:0 auto;}
  .cta-inner{
    position:relative;overflow:hidden;
    border-radius:24px;
    padding:50px 52px;
    background:linear-gradient(120deg,#1b1740 0%,#312e81 50%,#4338ca 100%);
    color:#fff;
    display:flex;align-items:center;justify-content:space-between;gap:32px;flex-wrap:wrap;
  }
  .cta-inner::after{
    content:"";position:absolute;right:-90px;top:-160px;
    width:440px;height:440px;border-radius:50%;
    background:radial-gradient(circle,rgba(56,189,248,.5),transparent 68%);
  }
  .cta-inner::before{
    content:"";position:absolute;left:-120px;bottom:-200px;
    width:400px;height:400px;border-radius:50%;
    background:radial-gradient(circle,rgba(168,85,247,.42),transparent 68%);
  }
  .cta-text{position:relative;z-index:1;max-width:560px;}
  .cta-text h2{margin:0;font-size:26px;letter-spacing:-.4px;font-weight:800;}
  .cta-text p{margin:12px 0 0;font-size:14.5px;line-height:1.75;color:rgba(255,255,255,.72);}
  .cta-actions{position:relative;z-index:1;display:flex;gap:12px;flex-wrap:wrap;}
  .btn-white{background:#fff;color:#312e81;padding:12px 24px;box-shadow:0 14px 30px -14px rgba(0,0,0,.6);}
  .btn-white:hover{transform:translateY(-2px);}
  .btn-ghost{
    padding:12px 24px;color:#fff;
    background:rgba(255,255,255,.1);
    border:1px solid rgba(255,255,255,.28);
  }
  .btn-ghost:hover{background:rgba(255,255,255,.18);transform:translateY(-2px);}

  /* ---------- Footer ---------- */
  .footer{
    border-top:1px solid var(--line);
    background:#fff;
    padding:26px 24px;
    text-align:center;
    font-size:13px;color:var(--ink3);
  }

  /* ---------- Responsive ---------- */
  @media (max-width:1080px){
    .grid{grid-template-columns:repeat(3,1fr);}
  }
  @media (max-width:860px){
    .nav{display:none;}
    .hero{padding:100px 0 42px;}
    .cta-inner{padding:40px 32px;}
  }
  @media (max-width:780px){
    .grid{grid-template-columns:repeat(2,1fr);gap:16px;}
  }
  @media (max-width:520px){
    .grid{grid-template-columns:1fr;}
    .stats{gap:20px 36px;}
    .stat b{font-size:23px;}
    .cta{padding:0 16px 70px;}
    .cta-inner{padding:34px 24px;}
  }
</style>