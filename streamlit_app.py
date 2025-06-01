import streamlit as st

st.title("🇯🇵 Kanta Azassu - Japanese Teacher")
st.write("Hello! This is a test app.")
st.success("If you can see this, the deployment works!")

if st.button("Click me!"):
    st.balloons()
    st.write("🎉 Success!")