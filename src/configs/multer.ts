import multer from "multer";
const storage = multer.diskStorage({
  destination(_req, _file, cb) {
    cb(null, "/src/uploads");
  },
  filename(_req, file, cb) {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    cb(null, `${file.fieldname}-${uniqueSuffix}`);
  },
});
export const upload = multer({ storage });
