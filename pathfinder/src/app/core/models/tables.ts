export interface inputTable {
  annual_revenue_for_client: number;
  it_spent_perc: number;
  it_spent_value: number;
  run_business_perc: number;
  run_business_value: number;
  grow_business_perc: number;
  grow_business_value: number;
  transform_it_perc: number;
  transform_it_value: number;
  annual_inflation_perc: number;
}

export interface itPersonnel {
  id: string;
  it_spend_on_personal_perc: number;
  it_spend_outsource: number;
  avr_ctc_per_fte: number;
  avr_ctc_final: number;
  run_fte_personal: number;
  run_fte_outsource: number;
  grow_fte_personal: number;
  grow_fte_outsource: number;
  transform_fte_personal: number;
  transform_fte_outsource: number;
  perc_eligible_forpersonal: number;
  eligible_outsource: number;
}
