import './alert.css';

type SuccessTypeProps = {
  success: boolean;
};

const Alert = ({ success }: SuccessTypeProps) => {
  return (
    <div className={success ? 'alert alert__success' : 'alert alert__error'}>
      <p>
        {success
          ? 'Plant added successfully to the PlantList'
          : 'Something went wrong. Please try again'}
      </p>
    </div>
  );
};

export default Alert;
