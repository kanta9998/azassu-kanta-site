import streamlit as st
import pandas as pd
from datetime import datetime

# ページ設定
st.set_page_config(
    page_title="Kanta Azassu - Japanese Language Expert",
    page_icon="🇯🇵",
    layout="wide",
    initial_sidebar_state="expanded"
)

# カスタムCSS
st.markdown("""
<style>
    .main-header {
        background: linear-gradient(90deg, #ff6b35, #f7931e);
        padding: 2rem;
        border-radius: 10px;
        text-align: center;
        margin-bottom: 2rem;
    }
    .feature-card {
        background: #f8f9fa;
        padding: 1.5rem;
        border-radius: 10px;
        border-left: 4px solid #ff6b35;
        margin: 1rem 0;
    }
    .stats-container {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        padding: 2rem;
        border-radius: 15px;
        color: white;
        text-align: center;
    }
    .cta-button {
        background: linear-gradient(45deg, #ff6b35, #f7931e);
        color: white;
        padding: 1rem 2rem;
        border-radius: 25px;
        text-decoration: none;
        font-weight: bold;
        display: inline-block;
        margin: 1rem;
    }
</style>
""", unsafe_allow_html=True)

# サイドバー - ナビゲーション
st.sidebar.image("https://via.placeholder.com/150x150?text=Kanta", width=150)
st.sidebar.markdown("# 🇯🇵 Kanta Azassu")
st.sidebar.markdown("### Japanese Language Expert")

# ページ選択
page = st.sidebar.selectbox(
    "Navigate to:",
    ["🏠 Home", "📚 Lessons", "💼 Portfolio", "📞 Contact"]
)

# メインコンテンツ
if page == "🏠 Home":
    # ヒーローセクション
    st.markdown("""
    <div class="main-header">
        <h1>🔥 Master Japanese With Confidence</h1>
        <h3>Join 10,000+ happy students who achieved fluency with my proven method</h3>
    </div>
    """, unsafe_allow_html=True)
    
    # 統計セクション
    col1, col2, col3, col4 = st.columns(4)
    
    with col1:
        st.metric("⭐ Rating", "5.0", "Perfect")
    with col2:
        st.metric("👥 Students", "10K+", "+500 this month")
    with col3:
        st.metric("🎯 Success Rate", "95%", "+5%")
    with col4:
        st.metric("⚡ Speed", "3x Faster", "vs traditional")
    
    st.markdown("---")
    
    # 特徴セクション
    st.markdown("## ✨ Why Students Choose Me")
    
    col1, col2 = st.columns(2)
    
    with col1:
        st.markdown("""
        <div class="feature-card">
            <h4>👨‍🏫 1-on-1 Personalized Lessons</h4>
            <p>Tailored lessons designed specifically for your learning goals and pace</p>
        </div>
        """, unsafe_allow_html=True)
        
        st.markdown("""
        <div class="feature-card">
            <h4>🎌 Cultural Immersion</h4>
            <p>Learn not just the language, but the culture behind it</p>
        </div>
        """, unsafe_allow_html=True)
    
    with col2:
        st.markdown("""
        <div class="feature-card">
            <h4>📅 Flexible Scheduling</h4>
            <p>Book lessons at times that work for your busy schedule</p>
        </div>
        """, unsafe_allow_html=True)
        
        st.markdown("""
        <div class="feature-card">
            <h4>🏆 Proven Results</h4>
            <p>Join 1000+ students who achieved fluency with my method</p>
        </div>
        """, unsafe_allow_html=True)
    
    # ソーシャルメディア
    st.markdown("---")
    st.markdown("## 🔥 Follow My Viral Journey")
    
    social_col1, social_col2, social_col3, social_col4 = st.columns(4)
    
    with social_col1:
        st.markdown("### 🎵 TikTok")
        st.markdown("**2.5M Followers**")
        st.markdown("Daily Japanese tips")
    
    with social_col2:
        st.markdown("### 📺 YouTube")
        st.markdown("**850K Subscribers**")
        st.markdown("In-depth lessons")
    
    with social_col3:
        st.markdown("### 📸 Instagram")
        st.markdown("**1.2M Followers**")
        st.markdown("Behind-the-scenes")
    
    with social_col4:
        st.markdown("### 🐦 Twitter")
        st.markdown("**450K Followers**")
        st.markdown("Quick tips & community")

elif page == "📚 Lessons":
    st.markdown("# 📚 Japanese Lessons")
    
    # レッスンプラン
    st.markdown("## 💝 Choose Your Transformation")
    
    col1, col2, col3 = st.columns(3)
    
    with col1:
        with st.container():
            st.markdown("### 🌟 Discovery Trial")
            st.markdown("**¥1,250** ~~¥2,500~~")
            st.markdown("*30 minutes*")
            st.markdown("- AI-powered level assessment")
            st.markdown("- Personalized learning roadmap")
            st.markdown("- VR cultural preview session")
            st.markdown("- 1-on-1 consultation with Kanta")
            if st.button("Book Discovery Trial"):
                st.balloons()
                st.success("Redirecting to booking system...")
    
    with col2:
        with st.container():
            st.markdown("### 🚀 Transformation Package")
            st.markdown("**¥2,800** ~~¥3,500~~")
            st.markdown("*60 minutes*")
            st.markdown("**🔥 MOST POPULAR**")
            st.markdown("- Full immersive 60-minute session")
            st.markdown("- VR cultural immersion experience")
            st.markdown("- AI-customized learning materials")
            st.markdown("- Real-time progress analytics")
            if st.button("Book Transformation"):
                st.balloons()
                st.success("Redirecting to booking system...")
    
    with col3:
        with st.container():
            st.markdown("### 💎 Mastery Accelerator")
            st.markdown("**¥22,500** ~~¥30,000~~")
            st.markdown("*10 lessons + bonuses*")
            st.markdown("- 10 x 60-minute premium lessons")
            st.markdown("- Unlimited VR cultural sessions")
            st.markdown("- Priority booking (24h guarantee)")
            st.markdown("- Custom AI tutor companion")
            if st.button("Book Mastery Package"):
                st.balloons()
                st.success("Redirecting to booking system...")
    
    # 成功事例
    st.markdown("---")
    st.markdown("## 🏆 Success Stories")
    
    testimonials = [
        {
            "name": "Alex Thompson",
            "achievement": "JLPT N2 → Fluent in 4 months",
            "story": "From struggling with basic conversation to leading business meetings in Tokyo",
            "flag": "🇺🇸"
        },
        {
            "name": "Maria Garcia",
            "achievement": "Zero → Conversational in 3 months",
            "story": "Now confidently dating a Japanese partner and planning to move to Osaka",
            "flag": "🇪🇸"
        },
        {
            "name": "David Kim",
            "achievement": "Business Japanese Mastery",
            "story": "Promoted to Japan division manager after mastering keigo and business culture",
            "flag": "🇰🇷"
        }
    ]
    
    for testimonial in testimonials:
        with st.expander(f"{testimonial['flag']} {testimonial['name']} - {testimonial['achievement']}"):
            st.write(f"⭐⭐⭐⭐⭐")
            st.write(f"*\"{testimonial['story']}\"*")

elif page == "💼 Portfolio":
    st.markdown("# 💼 Creative Portfolio")
    
    # 統計
    st.markdown("## 📊 Success Metrics")
    
    col1, col2, col3 = st.columns(3)
    
    with col1:
        st.markdown("""
        <div class="stats-container">
            <h2>5M+</h2>
            <p>Total Views</p>
        </div>
        """, unsafe_allow_html=True)
    
    with col2:
        st.markdown("""
        <div class="stats-container">
            <h2>3M+</h2>
            <p>Followers</p>
        </div>
        """, unsafe_allow_html=True)
    
    with col3:
        st.markdown("""
        <div class="stats-container">
            <h2>150+</h2>
            <p>Brand Partnerships</p>
        </div>
        """, unsafe_allow_html=True)
    
    st.markdown("---")
    
    # ポートフォリオアイテム
    st.markdown("## 🎨 Featured Work")
    
    portfolio_items = [
        {
            "title": "TikTok Viral Video: Japanese Pronunciation Tips",
            "views": "1.2M views",
            "description": "A viral TikTok video teaching Japanese pronunciation that reached over 1 million views"
        },
        {
            "title": "Brand Collaboration: Japanese Learning App Partnership",
            "revenue": "$50K+ revenue",
            "description": "Successful brand collaboration with a leading Japanese learning app"
        },
        {
            "title": "YouTube Educational Series: Japanese Culture Deep Dive",
            "episodes": "12 episodes",
            "description": "Comprehensive YouTube series exploring Japanese culture and modern society"
        }
    ]
    
    for item in portfolio_items:
        with st.expander(item["title"]):
            if "views" in item:
                st.metric("Views", item["views"])
            elif "revenue" in item:
                st.metric("Revenue", item["revenue"])
            elif "episodes" in item:
                st.metric("Episodes", item["episodes"])
            st.write(item["description"])

elif page == "📞 Contact":
    st.markdown("# 📞 Let's Start Your Success Story")
    
    st.markdown("### Tell me about your Japanese goals and I'll create a personalized learning plan just for you")
    
    # コンタクトフォーム
    with st.form("contact_form"):
        col1, col2 = st.columns(2)
        
        with col1:
            name = st.text_input("Name *")
            email = st.text_input("Email *")
        
        with col2:
            phone = st.text_input("Phone")
            goal = st.selectbox("Learning Goal", [
                "Complete Beginner",
                "JLPT Preparation",
                "Business Japanese",
                "Travel & Culture",
                "Anime & Pop Culture"
            ])
        
        message = st.text_area("Tell me about your Japanese learning goals...")
        
        submit = st.form_submit_button("🚀 Send Message")
        
        if submit:
            if name and email:
                st.balloons()
                st.success("🎉 Message sent successfully! I'll get back to you within 24 hours.")
                st.info("In the meantime, follow me on social media for daily Japanese tips!")
            else:
                st.error("Please fill in all required fields (Name and Email)")
    
    # 連絡先情報
    st.markdown("---")
    st.markdown("## 🌟 Follow My Journey")
    
    col1, col2, col3 = st.columns(3)
    
    with col1:
        st.markdown("### 📧 Email")
        st.markdown("contact@azassukanta.com")
    
    with col2:
        st.markdown("### 📱 WhatsApp")
        st.markdown("+81-XXX-XXXX-XXXX")
    
    with col3:
        st.markdown("### 🕒 Response Time")
        st.markdown("Within 24 hours")

# フッター
st.markdown("---")
st.markdown("""
<div style="text-align: center; padding: 2rem;">
    <h3>🇯🇵 Ready to Transform Your Japanese?</h3>
    <p>Join thousands of successful students who transformed their Japanese skills</p>
</div>
""", unsafe_allow_html=True)

# サイドバーにクイックアクション
st.sidebar.markdown("---")
st.sidebar.markdown("### 🚀 Quick Actions")
if st.sidebar.button("📞 Book Free Trial"):
    st.sidebar.success("Redirecting to booking...")
if st.sidebar.button("💌 Subscribe Newsletter"):
    st.sidebar.success("Subscribed!")

# 統計情報をサイドバーに表示
st.sidebar.markdown("---")
st.sidebar.markdown("### 📊 Live Stats")
st.sidebar.metric("🌟 Students This Month", "1,247", "+156")
st.sidebar.metric("🎥 Content Views", "2.4M", "+45K")
st.sidebar.metric("💯 Success Rate", "95%", "+2%")