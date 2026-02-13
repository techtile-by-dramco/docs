---
title: Running Experiments
description: Practical sequence for preparing and executing experiments on the Techtile infrastructure.
component: operations
status: reviewed
last_verified: 2026-02-13
sensitivity: internal
---

## Scope

This page gives an operations-first flow to run experiments reliably across network, timing, tile nodes, and measurement subsystems.

## Pre-Run Checklist

1. Confirm you can access Techtile infrastructure:
   - on-site network access, or
   - VPN via [Remote Access](/operations/remote-access/).
2. Confirm required hosts are reachable (server, DAQ, timing, target tile nodes).
3. Confirm the selected tile subset and their power state.
4. Confirm timing path is healthy before starting synchronized capture workloads.
5. Confirm required storage target and naming conventions for output data.

## Standard Run Flow

1. Prepare access and control:
   - verify management reachability to infrastructure endpoints in [Network Backbone](/infrastructure/network/).
2. Prepare compute/radio endpoints:
   - verify tile status and apply required fleet operations in [Tile Management](/operations/tile-management/).
3. Prepare timing:
   - verify timing/sync readiness in [Time & Synchronization](/infrastructure/time/).
4. Bring up experiment services:
   - start acquisition/control stack for the specific experiment (DAQ, SDR, or motion capture path).
5. Execute experiment run:
   - monitor health and sample integrity during capture.
6. Stop and archive:
   - stop services in a controlled order and archive data + metadata together.

## Subsystem-Specific Notes

- SDR/RF experiments:
  - validate tile node baseline and RF setup before long captures.
  - see [Tile Node Platform](/infrastructure/tile-node/) and [RF Subsystem](/infrastructure/rf/).
- DAQ-centric experiments:
  - verify DAQ route and synchronization setup first.
  - see [DAQ Stack](/infrastructure/daq/).
- Motion-capture-assisted experiments:
  - ensure Qualisys calibration and stream availability.
  - see [Qualisys Motion Capture](/infrastructure/qualisys/).

## Post-Run Checklist

1. Validate output completeness (expected files, duration, timestamps).
2. Record run context (tile set, timing mode, software version/commit, operator notes).
3. Store logs and metadata with the dataset for reproducibility.
4. Flag any infra drift for follow-up before next run.

