---
title: Qualisys Motion Capture & Ground Truth
description: Qualisys setup, calibration, and real-time streaming integration.
component: qualisys
status: reviewed
last_verified: 2026-02-13
sensitivity: internal
---

## Scope

Ground-truth motion capture subsystem and its software integration path into experiments.

## Deployed Facts

- Qualisys setup docs define QDS as DHCP/network configurator for camera systems.
- QTM setup workflow includes locate-system, camera ordering, and calibration routines.
- Calibration requires consistent L-frame/wand process and periodic recalibration after camera movement.
- Python SDK docs show 6DoF streaming and QTM client-control workflow.
- Local integration script connects to Qualisys host over Techtile network and stores sampled positions.
- Techtile `positioner` library is used to extract tracked-body position from Qualisys.

## Position Extraction Code

- Repository: <https://github.com/techtile-by-dramco/positioner>
- Purpose: retrieve Qualisys tracked-body position for experiments.
- Data path:
  - `backend="direct"`: connects to QTM (`qtm_rt`), streams 6DoF frames, and returns averaged `x/y/z` (meters) and rotation matrix.
  - `backend="zmq"`: subscribes to streamed position updates over ZeroMQ.
- Runtime note: the client expects a `.env` with `QUALYSIS_KEY` for QTM control access.

## Interfaces

- **Network**: dedicated camera interface + host interface for control/streaming.
- **Software**: QTM + Python SDK (`qtm` / `qtm_rt`) integration.
- **Experiment pipeline**: position/rotation feed used as reference or labels.

## Constraints and Risks

- Camera movement invalidates calibration products.
- Local script and install text include secrets and keys; these are redacted from docs output.
- Stream consumers depend on matching rigid-body naming and QTM project configuration.

## Depends On

- Stable network path between QTM host and stream consumers.
- Physical camera placement and calibrated capture volume.

## Provides To

- Ground-truth 6DoF trajectories for DAQ/RF/acoustic validation.

## Critical Paths

- QDS interface assignment and DHCP handling before QTM discovery.
- QTM client-control and password settings before Python SDK streaming.
