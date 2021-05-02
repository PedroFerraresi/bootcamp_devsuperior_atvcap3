import ContentLoader from "react-content-loader"

const InfoLoader = () => (
  <ContentLoader 
    speed={2}
    width={1200}
    height={305}
    viewBox="0 0 1200 305"
    backgroundColor="#dedede"
    foregroundColor="#f5f5f5"
  >
    <rect x="0" y="23" rx="2" ry="2" width="1200" height="305" />
  </ContentLoader>
)

export default InfoLoader;