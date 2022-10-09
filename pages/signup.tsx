import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  email: string;
  password: string;
  confirmPassword: string;
};

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <>
      <form onClick={handleSubmit(onSubmit)}>
        <div>
          <label>Email</label>
          <input
            type="email"
            placeholder="sample@test.com"
            //requiredをtrueにすることで必須の項目になる
            {...register("email", { required: true })}
          />
          {errors.email && <p>Mailは必須です</p>}
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            //requiredをtrueにすることで必須の項目になる
            {...register("password", { required: true })}
          />
          {errors.password && <p>Passwordは必須です</p>}
        </div>
        <div>
          <label>Password再入力</label>
          <input
            type="password"
            //requiredをtrueにすることで必須の項目になる
            {...register("confirmPassword", { required: true })}
          />
          {errors.confirmPassword && <p>パスワード再入力は必須です</p>}
        </div>
        <button type="submit">SignUp</button>
      </form>
    </>
  );
}
