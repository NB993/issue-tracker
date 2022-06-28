package kr.codesquad.issuetracker.core.label.controller;

import javax.validation.Valid;
import kr.codesquad.issuetracker.core.label.dto.CreateLabelRequest;
import kr.codesquad.issuetracker.core.label.service.LabelService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class LabelController {

    private final LabelService labelService;

    @PostMapping("/labels")
    public void createLabel(@RequestBody @Valid CreateLabelRequest createLabelRequest) {
        labelService.createLabel(createLabelRequest);
    }
}
