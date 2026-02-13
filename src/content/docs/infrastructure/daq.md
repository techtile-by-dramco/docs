---
title: DAQ & Central Capture Stack
description: PXIe architecture, channel capacities, synchronization, and usage patterns.
component: daq
status: reviewed
last_verified: 2026-02-13
sensitivity: internal
---

## Scope

Central high-channel-count acquisition and actuation backbone for synchronized experiments.

## Deployed Facts

- The DAQ stack includes PXIe chassis/controller plus timing and multifunction I/O modules.
- NI PXIe-6358 specs in local docs include:
  - `16 differential AI`
  - `16-bit ADC`
  - up to `1.25 MS/s` per channel
  - `4 AO` and `48 DIO`
- Timing/sync module family docs identify PXIe-6672 usage and PXI/PXIe trigger-clock routing.
- Local synchronization code routes tasks against `PXIe_Clk100` and explicit master/slave trigger roles.
- Example code and README enforce fixed synchronization workflow via provided executables.

## Interfaces

- **Input/output**: analog capture/generation and digital I/O via slot modules.
- **Timing**: reference clock and triggers from synchronization module.
- **Storage/backend**: local RAID and processing hosts referenced in ops files.

## Constraints and Risks

- Modifying synchronization helper executables/workflow can degrade timing performance.
- Slot/channel assumptions in examples are hard-coded and must match physical wiring.
- Some DAQ docs include account details; credentials are intentionally omitted here.

## Depends On

- Stable chassis power and thermal conditions.
- Valid timing distribution configuration.
- Correct network/storage availability for data offload.

## Provides To

- High-fidelity synchronized sensing/actuation baseline.
- Validation baseline for distributed edge setups.

## Critical Paths

- Sync init (`sync.exe`) -> task commit/start order -> synchronized read/write.
- Cleanup/reset process after acquisition to avoid persistent routing artifacts.
