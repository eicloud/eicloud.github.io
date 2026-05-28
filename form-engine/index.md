---
# layout: page
# navbar: false
# sidebar: false
aside: false
outline: false
# footer: false
title: "极智云表单引擎"
description: 极智云表单引擎，拖拉拽方式搭建业务表单，所见即所得。支持基本字段，用户、部门组织架构字段，图片、附件、富文本字段，数据选择、子表单字段20余种。为快速搭建业务应用提供强劲动力。支持公式：实现业务计算规则可配置化。支持数据联动：关联数据，选择数据，填充数据。实现各业务表单数据关联。
head:
  - - link
    - rel: stylesheet
      href: https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css
  - - link
    - rel: stylesheet
      href: https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,300;14..32,400;14..32,500;14..32,600;14..32,700&display=swap
---

<!-- 导航 / Hero 简洁 -->
<div class="gradient-bg" style="padding: 20px 0 80px 0;">
    <div class="container">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 20px; margin-bottom: 60px;">
            <div style="font-size: 1.8rem; font-weight: 700; color: white;">
                <i class="fas fa-cubes" style="margin-right: 8px;"></i> 极智云<span style="font-weight: 400;">·表单引擎</span>
            </div>
            <div>
                <a href="./doc/" class="btn btn-outline-light" style="margin-right: 12px;">产品文档</a>
                <a href="https://joy.eintelli.cn" class="btn btn-primary" style="background: #ffb347; color:#1e293b;">开始免费使用 <i class="fas fa-arrow-right"></i></a>
            </div>
        </div>
        <div style="max-width: 700px; color: white;">
            <span class="badge" style="background: rgba(255,255,255,0.2); color: white;">新一代低代码表单引擎</span>
            <h1 style="font-size: 3.2rem; font-weight: 800; letter-spacing: -0.02em; color: white; margin-bottom: 20px; line-height: 120%">让复杂表单逻辑<br>像搭积木一样简单</h1>
            <p style="font-size: 1.2rem; opacity: 0.9; margin-bottom: 32px;">20+ 专业组件 · 可视化公式 · 动态数据联动 · 智能显隐规则</p>
            <div style="display: flex; gap: 16px; flex-wrap: wrap;">
                <a href="#demo" class="btn btn-primary" style="background: white; color:#0f172a;">体验动态演示 <i class="fas fa-play"></i></a>
                <a href="#features" class="btn btn-outline-light">探索特性</a>
            </div>
        </div>
    </div>
</div>

<!-- 四大核心特性 -->
<div class="container" id="features">
    <div class="section" style="padding-bottom: 40px;">
        <div style="text-align: center;">
            <span class="badge">核心能力</span>
            <h2>企业级表单引擎 · 释放生产力</h2>
            <p class="section-sub">从复杂业务到敏捷配置，让表单开发效率提升 10 倍</p>
        </div>
        <div class="features-grid">
            <div class="feature-card">
                <div class="feature-icon"><i class="fas fa-layer-group"></i></div>
                <h3>20+ 丰富组件</h3>
                <p>文本框、富文本、评分、滑块、级联选择、文件上传等开箱即用，覆盖 90% 业务场景。</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon"><i class="fas fa-square-root-variable"></i></div>
                <h3>智能公式引擎</h3>
                <p>支持四则运算、条件判断、字段聚合，业务计算规则完全可配置，无需代码实时生效。</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon"><i class="fas fa-link"></i></div>
                <h3>数据联动 · 动态填充</h3>
                <p>关联数据源，选择即填充，跨表单联动，下拉选项、主从表数据无缝衔接。</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon"><i class="fas fa-eye-slash"></i></div>
                <h3>动态表单 · 显隐规则</h3>
                <p>条件控制组件显示/隐藏，字段权限动态化，完美适配审批流、多步骤表单。</p>
            </div>
        </div>
    </div>
</div>

<!-- 20+ 组件视觉专区 -->
<div class="container">
    <div class="component-showcase">
        <div style="text-align: center;">
            <i class="fas fa-puzzle-piece" style="color:#2d7a4b; font-size: 2rem;"></i>
            <h2 style="margin-top: 12px;">20+ 专业组件库</h2>
            <p class="section-sub" style="margin-bottom: 20px;">涵盖基础控件、高级交互、业务组件，拖拽即配置</p>
        </div>
        <div class="components-grid">
            <div class="comp-item"><i class="fas fa-font"></i>单行文本</div>
            <div class="comp-item"><i class="fas fa-paragraph"></i>多行文本</div>
            <div class="comp-item"><i class="fas fa-list-ol"></i>数字输入</div>
            <div class="comp-item"><i class="fas fa-envelope"></i>邮箱</div>
            <div class="comp-item"><i class="fas fa-phone"></i>手机号</div>
            <div class="comp-item"><i class="fas fa-calendar-alt"></i>日期选择</div>
            <div class="comp-item"><i class="fas fa-clock"></i>时间选择</div>
            <div class="comp-item"><i class="fas fa-check-square"></i>复选框组</div>
            <div class="comp-item"><i class="fas fa-dot-circle"></i>单选框组</div>
            <div class="comp-item"><i class="fas fa-caret-down"></i>下拉选择</div>
            <div class="comp-item"><i class="fas fa-code-branch"></i>级联选择</div>
            <div class="comp-item"><i class="fas fa-sliders-h"></i>滑块</div>
            <div class="comp-item"><i class="fas fa-star"></i>评分组件</div>
            <div class="comp-item"><i class="fas fa-toggle-on"></i>开关</div>
            <div class="comp-item"><i class="fas fa-upload"></i>文件上传</div>
            <div class="comp-item"><i class="fas fa-image"></i>图片选择</div>
            <div class="comp-item"><i class="fas fa-table"></i>子表格</div>
            <div class="comp-item"><i class="fas fa-qrcode"></i>二维码</div>
            <div class="comp-item"><i class="fas fa-chart-pie"></i>统计卡片</div>
            <div class="comp-item"><i class="fas fa-palette"></i>颜色选择</div>
            <div class="comp-item"><i class="fas fa-address-card"></i>地址组件</div>
            <div class="comp-item"><i class="fas fa-laptop-code"></i>富文本</div>
        </div>
        <div style="text-align: center; margin-top: 32px;">
            <span class="rule-tag"><i class="fas-regular fa-plus"></i> 以及更多高级业务组件</span>
        </div>
    </div>
</div>

<!-- 实时交互演示区: 公式+联动+动态显隐 -->
<div class="container" id="demo">
    <div class="section-sm">
        <div class="demo-section">
            <div class="demo-title">
                ✨ 实时演示 · 三大核心动态能力
                <span style="font-size: 0.9rem; font-weight: normal; margin-left: 12px;"><i class="fas fa-magic"></i> 所见即所得</span>
            </div>
            <div class="demo-sub">
                公式计算 | 数据联动填充 | 组件显示/隐藏规则配置 （全部可配置化，无需编码）
            </div>
            <div class="form-demo">
                <!-- 左侧表单交互区 -->
                <div class="demo-form-fields">
                    <!-- 联动演示：产品选择填充描述和单价 -->
                    <div class="field-group">
                        <label><i class="fas fa-cubes"></i> 产品 (数据联动)</label>
                        <select id="productSelect">
                            <option value="proA">✨ 企业旗舰版</option>
                            <option value="proB">🚀 专业增强版</option>
                            <option value="proC">📦 轻量基础版</option>
                        </select>
                        <div class="feature-tag">
                            <span class="rule-tag"><i class="fas fa-link"></i> 联动规则：选择产品 → 填充描述+单价</span>
                        </div>
                    </div>
                    <div class="field-group">
                        <label><i class="fas fa-info-circle"></i> 产品描述 (联动填充)</label>
                        <input type="text" id="productDesc" class="readonly-input" readonly value="全功能企业级解决方案，无限API调用">
                    </div>
                    <div class="field-group">
                        <label><i class="fas fa-tag"></i> 单价 (¥) <span class="inline-badge">联动数据源</span></label>
                        <input type="text" id="unitPrice" class="readonly-input" readonly value="299">
                    </div>
                    <div class="field-group">
                        <label><i class="fas fa-calculator"></i> 数量 <span class="inline-badge">公式依赖项</span></label>
                        <input type="number" id="quantity" value="1" min="1" step="1">
                    </div>
                    <div class="field-group">
                        <label><i class="fas fa-chart-line"></i> 总价 (公式: 单价 × 数量) </label>
                        <input type="text" id="totalPrice" class="total-price" readonly value="299">
                        <div class="rule-tag" style="margin-top: 8px;"><i class="fas fa-square-root-variable"></i> 公式引擎: total = unitPrice * quantity 实时计算</div>
                    </div>
                    <!-- 动态显隐演示：显示折扣码字段 -->
                    <div class="field-group">
                        <label><i class="fas fa-eye-slash"></i> 动态规则演示:</label>
                        <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
                            <label style="font-weight: normal; cursor: pointer;">
                                <input type="checkbox" id="showCouponToggle"> 使用优惠码 (显示/隐藏规则)
                            </label>
                            <span class="rule-tag"><i class="fas fa-cog"></i> 规则配置: 勾选后显示优惠码输入框 → 支持任意条件显隐</span>
                        </div>
                    </div>
                    <div id="couponField" class="field-group hidden-field">
                        <label><i class="fas fa-ticket-alt"></i> 优惠码</label>
                        <input type="text" placeholder="输入优惠码 (例如 SAVE20)" id="couponInput">
                    </div>
                    <div class="field-group">
                        <label><i class="fas fa-pen"></i> 备注 (多行文本组件)</label>
                        <textarea rows="2" placeholder="支持组件丰富扩展..."></textarea>
                    </div>
                </div>
                <!-- 右侧高亮说明区：展示规则引擎价值 -->
                <div class="demo-highlight">
                    <p><i class="fas fa-bolt" style="color:#2d7a4b;"></i> <strong>✨ 本次演示完美匹配引擎特性</strong></p>
                    <ul style="margin: 20px 0 0 20px; line-height: 1.7; color: #334155;">
                        <li><strong>✅ 公式引擎</strong> — 总价字段自动计算 (单价 * 数量)，业务规则实时响应。</li>
                        <li><strong>✅ 数据联动</strong> — 切换产品时，描述与单价自动填充，模拟关联数据下拉填充。</li>
                        <li><strong>✅ 动态表单 (显隐规则)</strong> — 勾选“使用优惠码”，优惠码输入框动态显示/隐藏，完全遵循配置化显隐逻辑。</li>
                        <li><strong>✅ 20+ 组件支撑</strong> — 上方组件库展示了所有类型，本表单已集成下拉、数字、只读、文本域、复选框等。</li>
                    </ul>
                    <div style="margin-top: 24px; background: #eef2ff; padding: 14px; border-radius: 20px;">
                        <i class="fas fa-code-branch"></i>  <strong>可配置化规则示例</strong><br>
                        • 公式: <code class="rule-tag">总价 = 单价 * 数量</code><br>
                        • 联动: 数据源映射产品 -> 字段填充 <br>
                        • 显隐: 优惠码字段绑定条件「复选框 == true」
                    </div>
                </div>
            </div>
            <div style="margin-top: 32px; text-align: center; font-size: 0.9rem; color: #2c5f2d;">
                <i class="fas fa-check-circle"></i> 无需代码，通过配置面板即可实现上述所有逻辑 —— 表单引擎原生支持
            </div>
        </div>
    </div>
</div>

<!-- CTA 试用区域 -->
<div class="container">
    <div class="cta" style="background: linear-gradient(115deg, #0f2b3d 0%, #1e4a6e 100%); border-radius: 48px; padding: 48px 40px; margin-bottom: 60px; text-align: center; color: white;">
        <h2 style="color: white; margin-bottom: 16px;">准备构建下一代表单应用？</h2>
        <p style="font-size: 1.1rem; margin-bottom: 32px; opacity: 0.9;">可视化设计器 + 全配置规则，让产品、运营均可自主搭建复杂表单</p>
        <a href="https://joy.eintelli.cn" class="btn btn-primary" style="background: #ffb347; color: #1e293b; font-size: 1rem;">立即申请演示 <i class="fas fa-arrow-right"></i></a>
        <p style="margin-top: 24px; font-size: 0.8rem;">免费使用</p>
    </div>
</div>

<!-- <footer>
    <div class="container">
        <p><i class="fas fa-cubes"></i> FormEngine·X — 智能表单引擎，驱动业务自动化</p>
        <p style="margin-top: 16px; font-size: 0.8rem;">© 2025 表单引擎 | 企业级低代码表单平台 | 支持私有化部署</p>
    </div>
</footer> -->

<script setup>
import { onMounted } from 'vue';
onMounted(() => {
    // 产品联动数据源
    const productMap = {
        proA: {
            desc: "全功能企业级解决方案，无限API调用，专属技术支持",
            price: 299
        },
        proB: {
            desc: "专业级性能+高级报表，适用中型团队，高性价比",
            price: 189
        },
        proC: {
            desc: "轻量核心功能，快速搭建表单应用，入门首选",
            price: 79
        }
    };

    // DOM 元素
    const productSelect = document.getElementById('productSelect');
    const productDesc = document.getElementById('productDesc');
    const unitPriceInput = document.getElementById('unitPrice');
    const quantityInput = document.getElementById('quantity');
    const totalPriceInput = document.getElementById('totalPrice');
    const showCouponToggle = document.getElementById('showCouponToggle');
    const couponField = document.getElementById('couponField');

    // 更新联动 (填充描述 & 单价)
    function updateProductLink() {
        const selectedVal = productSelect.value;
        const data = productMap[selectedVal];
        if (data) {
            productDesc.value = data.desc;
            unitPriceInput.value = data.price;
        } else {
            productDesc.value = "--";
            unitPriceInput.value = 0;
        }
        // 联动后重新计算总价公式
        calculateTotal();
    }

    // 公式: 总价 = 单价 * 数量
    function calculateTotal() {
        let price = parseFloat(unitPriceInput.value);
        let qty = parseInt(quantityInput.value, 10);
        if (isNaN(price)) price = 0;
        if (isNaN(qty)) qty = 1;
        const total = price * qty;
        totalPriceInput.value = total.toFixed(2);
    }

    // 动态显隐规则: 监听复选框，显示/隐藏优惠码字段
    function toggleCouponField() {
        if (showCouponToggle.checked) {
            couponField.classList.remove('hidden-field');
        } else {
            couponField.classList.add('hidden-field');
        }
    }

    // 监听事件
    productSelect.addEventListener('change', () => {
        updateProductLink();
    });

    quantityInput.addEventListener('input', () => {
        calculateTotal();
    });

    showCouponToggle.addEventListener('change', () => {
        toggleCouponField();
    });

    // 当单价被联动改变时（理论上只读但是内部联动后重新计算）
    // 因为联动时直接修改了unitPriceInput的值，之后需要重新调用公式
    // 重写updateProductLink后加入计算
    // 同时在页面加载时执行初始化和监听unitPrice变化（如果手动改动？但只读，但为了安全我们主动观察）
    // 另外如果联动改变，再调用计算
    const originalUpdate = updateProductLink;
    window.updateProductLink = function() {
        originalUpdate();
        calculateTotal();
    };
    updateProductLink = function() {
        originalUpdate();
        calculateTotal();
    };
    // 重新绑定确保联动后公式更新
    productSelect.addEventListener('change', () => {
        updateProductLink();
    });

    // 手动调用初始化联动，公式，以及显隐默认隐藏
    updateProductLink();
    toggleCouponField();   // 初始未勾选，优惠码隐藏

    // 额外保障：单价即便只读，联动赋值后触发公式
    // 监听单价变化（虽readonly但程序改变不会触发change，但我们的updateProductLink已经调用calculateTotal了）
    // 数量监听已经有了，完美实现公式驱动
    // 如果用户从数量处改变，calculateTotal触发；联动改变时也触发。完全符合预期。
    // 并且为了展示动态联动公式最佳实践，再加一个模拟数据填充demo: 完美。
    // 同时为了体现数据联动的"选择数据，填充数据"，下拉选择即填充描述&价格，完美。
    // 动态表单隐藏/展示规则已实现。
    console.log("演示区已启动：公式联动+显隐规则+组件库已展示");
});
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Inter', sans-serif;
    background: #f8fafc;
    color: #0f172a;
    scroll-behavior: smooth;
}

.container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 24px;
}

/* 渐变 & 辅助背景 */
.gradient-bg {
    background: linear-gradient(135deg, #0f2b3d 0%, #1b4a6e 100%);
}

.section {
    padding: 80px 0;
}

.section-sm {
    padding: 60px 0;
}

/* 按钮 */
.btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 12px 28px;
    font-weight: 600;
    border-radius: 40px;
    transition: all 0.25s ease;
    cursor: pointer;
    text-decoration: none;
    font-size: 1rem;
    border: none;
}

.btn-primary {
    background: #2d7a4b;
    color: white;
    box-shadow: 0 8px 20px rgba(45, 122, 75, 0.25);
}

.btn-primary:hover {
    background: #23673e;
    transform: translateY(-2px);
    box-shadow: 0 14px 26px rgba(0, 0, 0, 0.1);
}

.btn-outline-light {
    background: transparent;
    border: 1.5px solid white;
    color: white;
}

.btn-outline-light:hover {
    background: rgba(255,255,255,0.1);
    border-color: white;
}

/* 标题 */
.badge {
    background: rgba(45, 122, 75, 0.12);
    color: #2d7a4b;
    font-weight: 600;
    padding: 6px 14px;
    border-radius: 30px;
    font-size: 0.85rem;
    display: inline-block;
    margin-bottom: 20px;
    letter-spacing: 0.3px;
}

h2 {
    font-size: 2.2rem;
    font-weight: 700;
    letter-spacing: -0.01em;
    margin-bottom: 16px;
}

.section-sub {
    color: #475569;
    max-width: 650px;
    margin-bottom: 48px;
    font-size: 1.1rem;
    line-height: 1.5;
}

/* 特性卡片 */
.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 32px;
    margin-top: 20px;
}

.feature-card {
    background: white;
    border-radius: 32px;
    padding: 32px 24px;
    box-shadow: 0 12px 30px rgba(0,0,0,0.04);
    transition: all 0.3s ease;
    border: 1px solid #eef2f6;
}

.feature-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 25px 40px -12px rgba(0,0,0,0.15);
}

.feature-icon {
    font-size: 2.5rem;
    color: #2d7a4b;
    margin-bottom: 24px;
}

.feature-card h3 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 12px;
}

.feature-card p {
    color: #334155;
    line-height: 1.5;
}

/* 组件展示 grid */
.component-showcase {
    background: #ffffff;
    border-radius: 48px;
    padding: 40px 32px;
    box-shadow: 0 20px 35px -12px rgba(0,0,0,0.05);
    border: 1px solid #e9edf2;
}

.components-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
    gap: 24px 16px;
    margin-top: 24px;
}

.comp-item {
    text-align: center;
    padding: 12px 6px;
    background: #f8fafc;
    border-radius: 24px;
    transition: all 0.2s;
    font-weight: 500;
    font-size: 0.85rem;
    color: #1e293b;
}

.comp-item i {
    font-size: 1.6rem;
    display: block;
    margin-bottom: 10px;
    color: #2d7a4b;
}

/* 实时演示区 */
.demo-section {
    background: linear-gradient(120deg, #f1f5f9 0%, #ffffff 100%);
    border-radius: 48px;
    padding: 40px 36px;
    box-shadow: 0 20px 35px -10px rgba(0,0,0,0.08);
    border: 1px solid #e2e8f0;
}

.demo-title {
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 12px;
}

.demo-sub {
    color: #475569;
    margin-bottom: 32px;
    border-left: 4px solid #2d7a4b;
    padding-left: 18px;
    font-weight: 500;
}

.form-demo {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 28px;
}

.demo-form-fields {
    background: white;
    border-radius: 32px;
    padding: 28px;
    box-shadow: 0 8px 20px rgba(0,0,0,0.02);
    border: 1px solid #eef2f6;
}

.field-group {
    margin-bottom: 24px;
}

.field-group label {
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 600;
    margin-bottom: 10px;
    color: #0f172a;
}

.field-group label i {
    color: #2d7a4b;
    font-size: 1rem;
}

input, select, textarea {
    width: 100%;
    padding: 12px 16px;
    border-radius: 20px;
    border: 1.5px solid #e2e8f0;
    font-family: 'Inter', sans-serif;
    transition: 0.2s;
    background: #fff;
    font-size: 0.95rem;
}

input:focus, select:focus, textarea:focus {
    outline: none;
    border-color: #2d7a4b;
    box-shadow: 0 0 0 3px rgba(45,122,75,0.2);
}

.readonly-input {
    background: #f1f5f9;
    cursor: default;
    color: #1e293b;
    font-weight: 500;
}

.total-price {
    background: #eef6ef;
    border-color: #cbdcd0;
    font-weight: 700;
    color: #2d7a4b;
}

.inline-badge {
    background: #eef2ff;
    padding: 2px 12px;
    border-radius: 50px;
    font-size: 0.75rem;
    font-weight: 600;
    color: #1e40af;
    margin-left: 8px;
}

.rule-tag {
    background: #f1f5f9;
    font-size: 0.7rem;
    display: inline-block;
    padding: 2px 10px;
    border-radius: 30px;
    font-weight: 500;
}

.feature-tag {
    margin-top: 16px;
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
}

.demo-highlight {
    background: #fefce8;
    border-radius: 28px;
    padding: 28px;
    border: 1px solid #fde047;
}

.demo-highlight p {
    font-weight: 500;
    margin-bottom: 10px;
}

.hidden-field {
    display: none;
}

@media (max-width: 800px) {
    .form-demo {
        grid-template-columns: 1fr;
    }
    .section {
        padding: 48px 0;
    }
    h2 {
        font-size: 1.8rem;
    }
    .demo-section {
        padding: 28px 20px;
    }
}

/* footer {
    background: #0f172a;
    color: #cbd5e1;
    padding: 40px 0;
    text-align: center;
} */

.cta {
    background: #2d7a4b;
    border-radius: 48px;
}

.hidden-field {
    display: none !important;
}
code {
    background: #eef2ff;
    padding: 2px 6px;
    border-radius: 16px;
    font-size: 0.8rem;
}
.btn-primary, .btn-outline-light {
    cursor: pointer;
}
input[readonly] {
    background-color: #f8fafc;
    cursor: default;
}
.total-price {
    font-weight: 800;
    background: #e4f2e7;
}
</style>