export const benchmark = {
  userId: '',
  projectName: '',
  hardware: {
    hardwareCalculations: [
      {
        eliminate_reducdancyElimination: 0.15,
        eliminate_retireDecommision: 0.3,
        consolidate_realignRedistribute: 0.2,
        rationalize_automateMl: 0.5,
      },
      {
        eliminate_reducdancyElimination: 0.1,
        eliminate_retireDecommision: 0.2,
        consolidate_realignRedistribute: 0.5,
        rationalize_automateMl: 2,
      },
      {
        eliminate_reducdancyElimination: 0,
        eliminate_retireDecommision: 0,
        consolidate_realignRedistribute: 0,
        rationalize_automateMl: 2.5,
      },
    ],
  },
  software: {
    softwareCalculations: [
      {
        rationalize_refactor: 1.0,
        std_platform: 1.0,
        transform_distributed_agile: 1.0,
        eliminate_redundancy: 0.15,
      },
      {
        rationalize_refactor: 1.5,
        std_platform: 2.0,
        transform_distributed_agile: 0.5,
        eliminate_redundancy: 0.1,
      },
      {
        rationalize_refactor: 1.0,
        std_platform: 1.0,
        transform_distributed_agile: 0,
        eliminate_redundancy: 0,
      },
    ],
  },
  managed: {
    managed_servicesCalculations: [
      {
        industrialize_shiftleft: 1,
        industrialize_automate: 0.5,
        industrialize_realtime: 0,
        synergize_selfservice: 0,
      },
      {
        industrialize_shiftleft: 1.5,
        industrialize_automate: 1,
        industrialize_realtime: 0.5,
        synergize_selfservice: 0.3,
      },
      {
        industrialize_shiftleft: 0.5,
        industrialize_automate: 2,
        industrialize_realtime: 0,
        synergize_selfservice: 0.2,
      },
    ],
  },
  hostedcbs: {
    hosted_cbsCalculations: [
      {
        transform_cloud: 2,
      },
      {
        transform_cloud: 5,
      },
      {
        transform_cloud: 7,
      },
    ],
  },
  cost: {
    cot_perc: 10,
    client_perc: 55,
    partner_perc: 45,
    yearBaseCostCalculations: [
      {
        year: 1,
        cot_spread_perc: 30,
      },
      {
        year: 2,
        cot_spread_perc: 50,
      },
      {
        year: 3,
        cot_spread_perc: 20,
      },
    ],
  },
  inputvalues: {
    annual_revenue_for_client: 11170000000,
    it_spent_perc: 2.5,
    run_business_perc: 65,
    grow_business_perc: 23,
    transform_it_perc: 12,
    annual_inflation_perc: 3,
  },
  itfunctions: {
    data_center_itspend_run_perc: 22,
    end_user_computing_itspend_run_perc: 9,
    it_service_desk_itspend_run_perc: 5,
    network_itspend_run_perc: 11,
    application_enhance_itspend_run_perc: 18,
    application_support_itspend_run_perc: 25,
    it_management_itspend_run_perc: 10,
    data_center_fte_spread_perc: 12,
    end_user_computing_fte_spread_perc: 8,
    it_service_desk_fte_spread_perc: 8,
    network_fte_spread_perc: 6,
    application_enhance_fte_spread_perc: 24,
    application_support_fte_spread_perc: 30,
    it_management_fte_spread_perc: 12,
  },
  itpersonalcost: {
    offshoreRatio: 80,
    onsitRatio: 20,
    partnerCtcOffshore: 20000,
    partnerCtcOnsite: 115000,
    yearBseCalculations: [
      {
        yearLine: 1,
        takeOverPlan: 25,
        ppImprovement: 3,
        onsiteRatio: 80,
        offshoreRatio: 20,
      },
      {
        yearLine: 2,
        takeOverPlan: 50,
        ppImprovement: 5,
        onsiteRatio: 50,
        offshoreRatio: 50,
      },
      {
        yearLine: 3,
        takeOverPlan: 25,
        ppImprovement: 2,
        onsiteRatio: 20,
        offshoreRatio: 80,
      },
    ],
  },
  itpersonnel: {
    it_spend_on_personal_perc: 67,
    avr_ctc_per_fte: 150000,
    perc_eligible_forpersonal: 85,
  },
  itspendcat: {
    year: 2022,
    hardware: 31,
    software: 29,
    hosted_cbs: 24,
    managedServices: 16,
  },
};
