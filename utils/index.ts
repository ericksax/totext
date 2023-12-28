export function renderImg(data: File, setImg: any, setImageFile: any) {
  if (!data.type.startsWith("image/")) {
    alert("Só é possível extrair texto de imagens.");
    return;
  }
  setImageFile(data);

  const { name, size } = data;
  const reader = new FileReader();
  reader.readAsDataURL(data);
  reader.onload = () => {
    const preview = reader.result;
    setImg({ name, size, preview });
  };
}
