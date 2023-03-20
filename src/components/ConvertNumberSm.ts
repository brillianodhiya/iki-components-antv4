export interface ConvertNumberSmProps {
  number?: number | string;
}

export const convertNumberSm = ({
  number = 0,
}: ConvertNumberSmProps): string => {
  number = parseFloat(String(number));

  if (isNaN(number)) {
    number = 0;
  }

  let data = new Intl.NumberFormat("id-ID").format(number);
  if (data.split(",").length > 1) {
    if (data.split(",")[1].length < 3) {
      return (
        data.split(",")[0] + "," + (data.split(",")[1] + "000").slice(0, 3)
      );
    } else {
      return data;
    }
  } else {
    return data + ",000";
  }
};
