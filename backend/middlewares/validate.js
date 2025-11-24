
export const validate = (schema) => (req, res, next) => {
  const result = schema.safeParse(req.body);  // safeParse = ma tuurayo error


  if (!result.success) {
    const formatted = result.error.format(); //wuxuu soo saaraa object uu Zod diyaariyay (error tree).
    console.log("formatted", formatted);

     // samee array of error messages
    const errors = Object.keys(formatted).map((field) => ({
      field,
      message: formatted[field]?._errors?.[0] || "invalid input",
    }));
    console.log("object keys :", Object.keys(formatted))

    return res.status(400).json({
      success: false,
      message: "validation failed",
      errors
    });
  }
  next();
};