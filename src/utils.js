export function convertContentfulAsset2Banner(asset) {
  return {
    title: asset.title,
    description: asset.description,
    image: asset.file.url,
  };
}